using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ValueCalcWebApp.Models;

namespace ValueCalcWebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    [HttpGet("GetUser")]
    public IActionResult Get()
    {
      //var users = GetUsers();
      return Ok(); // (users)
    }

    [HttpGet("CreateUser")]
    public IActionResult Create([FromBody] UserRequest request)
    {
      return Ok();
    }

    [HttpPut("UpdateUser")]
    public IActionResult Update([FromBody] UserRequest request)
    {
      return Ok();
    }

    [HttpDelete("DeleteUser/{Id}")]
    public IActionResult Delete(int Id)
    {
      return Ok();
    }

    /*private List<UserRequest> GetUsers()
    {
      return new List<UserRequest> {
        new UserRequest { username = "ABC", firstName = "M", lastName = "T"},
        new UserRequest { username = "ABC", firstName = "A", lastName = "B"}
      };
    }*/
  }
}
