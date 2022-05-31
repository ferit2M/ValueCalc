using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public IActionResult GetPapers()
    {
      try
      {
        var valuePapers = _dbContext.ValuePapers.ToList();
        if (valuePapers.Count == 0)
        {
          return StatusCode(404, "No paper found");
        }
        return Ok(valuePapers);
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }

    [HttpGet("GetPapersForUser")]
    public IActionResult GetPapersForUser([FromBody] UserRequest request)
    {
      try
      {
        var userId = request.Id;
        List<ValuePapers> papers = new List<ValuePapers>();
        List<BoughtPapers> boughtPapers = new List<BoughtPapers>();

        var allBoughtPapers = _dbContext.BoughtPapers.ToList();
        foreach (BoughtPapers bp in allBoughtPapers)
        {
          if (bp.userId == userId)
            boughtPapers.Add(bp);
        }

        var allValuePapers = _dbContext.ValuePapers.ToList();
        foreach (ValuePapers vp in allValuePapers)
        {
          foreach (BoughtPapers bp in boughtPapers)
             if (vp.Id == bp.paperId)
              papers.Add(vp);
        }

        if (papers.Count == 0)
        {
          return StatusCode(404, "No paper found for this user");
        }
        else
        {
          return Ok(papers);
        }
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }

    [HttpPost("SaveValuePaper")]
    public IActionResult SaveValuePaper([FromBody] ValuePaperRequest request)
    {
      ValuePapers paper = new ValuePapers();

      //paper.Id = request.Id;
      paper.buyingPrice = request.buyingPrice;
      paper.spentBuying = request.spentBuying;
      paper.currentPrice = request.currentPrice;
      paper.boughtShares = request.boughtShares;
      paper.name= request.name;
      
      try
      {
        _dbContext.ValuePapers.Add(paper);
        _dbContext.SaveChanges();
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      return Ok(paper);
    }

    [HttpPost("SavePaperWithUser")]
    public IActionResult SavePaperWithUser([FromBody] BoughtPaperRequest request)
    {
      BoughtPapers relation = new BoughtPapers();

      relation.userId = request.userId;
      relation.paperId = request.paperId;

      try
      {
        _dbContext.BoughtPapers.Add(relation);
        _dbContext.SaveChanges();
      }
      catch (Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
      //return Ok(relation); // ili ovo vratiti
      return Ok();
    }

    [HttpDelete("DeletePaper/{Id}")]
    public IActionResult DeletePaper(int Id)
    {
      try
      {
        BoughtPapers boughtPaper = _dbContext.BoughtPapers.Where(x => x.paperId == Id).Single<BoughtPapers>();
        _dbContext.BoughtPapers.Remove(boughtPaper);
        //_dbContext.SaveChanges();

        ValuePapers paper = _dbContext.ValuePapers.Where(x => x.Id == Id).Single<ValuePapers>();
        _dbContext.ValuePapers.Remove(paper);
        _dbContext.SaveChanges();

        return Ok("Record has successfully Deleted");
      }
      catch(Exception)
      {
        return StatusCode(500, "An error has occurred");
      }
    }
  }
}
