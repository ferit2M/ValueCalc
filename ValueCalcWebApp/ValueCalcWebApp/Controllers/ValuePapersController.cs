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
  public class ValuePapersController : ControllerBase
  {
    private ValueCalcDbContext _dbContext;
    public ValuePapersController(ValueCalcDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpGet("GetPapers")]
    public IActionResult Get()
    {
      try
      {
        var valuePapers = _dbContext.ValuePapers.ToList();
        if (valuePapers.Count == 0)
        {
          return StatusCode(404, "No user found");
        }
        return Ok(valuePapers);
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }

  }
}
