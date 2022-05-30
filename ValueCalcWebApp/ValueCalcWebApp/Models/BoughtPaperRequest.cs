using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Models
{
  public class BoughtPaperRequest
  {
    public int userId { get; set; }
    public int paperId { get; set; }
  }
}
