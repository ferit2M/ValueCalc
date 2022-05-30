using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Models
{
  public class ValuePaperRequest
  {
    public int Id { get; set; }
    public double buyingPrice { get; set; }
    public double spentBuying { get; set; }
    public double currentPrice { get; set; }
    public double boughtShares { get; set; }
    public string name { get; set; }
  }
}
