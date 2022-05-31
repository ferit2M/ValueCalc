using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using ValueCalcWebApp.Data;
using ValueCalcWebApp.Models;

namespace ValueCalcWebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private ValueCalcDbContext _dbContext;

    public UsersController(ValueCalcDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpGet("GetUsers")]
    public IActionResult Get()
    {
      try
      {
        var users = _dbContext.Users.ToList();
        if (users.Count == 0)
        {
          return StatusCode(404, "No user found");
        }
        return Ok(users);
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }

    [HttpPost("VerifyUser")]
    public IActionResult VerifyUser([FromBody] UserRequest request)
    {
      try
      {
        var username = request.username;
        username.TrimStart('"');

        var user = _dbContext.Users.FirstOrDefault(x => x.username == username);

        if (user == null)
        {
          return StatusCode(404, "No user found");
        }
        else if (user.password == request.password)
        {
          //var obj = new { message = "verified" };
          //return StatusCode(200, obj);
          return Ok(user);
        }
        else
        {

          return StatusCode(403, "Wrong password");
        }
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }

    [HttpPost("CreateUser")]
    public IActionResult Create([FromBody] UserRequest request)
    {
      Users user = new Users();
      user.username = request.username;
      user.firstName = request.firstName;
      user.lastName = request.lastName;
      user.password = request.password;

      try
      {
        _dbContext.Users.Add(user);
        _dbContext.SaveChanges();
      }
      catch(Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      return Ok(user);
    }

    [HttpPut("UpdateUser")]
    public IActionResult Update([FromBody] UserRequest request)
    {
      try
      {
        var user = _dbContext.Users.FirstOrDefault(x => x.Id == request.Id);
        if (user == null)
        {
          return StatusCode(404, "User not found");
        }
        user.username = request.username;
        user.firstName = request.firstName;
        user.lastName = request.lastName;
        user.password = request.password;

        _dbContext.Entry(user).State = EntityState.Modified;
        _dbContext.SaveChanges();
      }
      catch(Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      var users = _dbContext.Users.ToList();
      return Ok(users);
    }

    [HttpPut("UpdateLastName")]
    public IActionResult UpdateLastName([FromBody] UserRequest request)
    {
      try
      {
        var user = _dbContext.Users.FirstOrDefault(x => x.Id == request.Id);
        if (user == null)
        {
          return StatusCode(404, "User not found");
        }

        user.lastName = request.lastName;

        _dbContext.Entry(user).State = EntityState.Modified;
        _dbContext.SaveChanges();
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      var users = _dbContext.Users.ToList();
      return Ok(users);
    }

    [HttpPut("UpdatePassword")]
    public IActionResult UpdatePassword([FromBody] UserRequest request)
    {
      try
      {
        var user = _dbContext.Users.FirstOrDefault(x => x.Id == request.Id);
        if (user == null)
        {
          return StatusCode(404, "User not found");
        }

        user.password = request.password;

        _dbContext.Entry(user).State = EntityState.Modified;
        _dbContext.SaveChanges();
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      return Ok();
    }

    [HttpDelete("DeleteUser/{Id}")]
    public IActionResult Delete(int Id)
    {
      return Ok();
    }
  }
}
