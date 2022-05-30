using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Data
{
  public class ValuePapers
  {
    [Key]
    public int Id { get; set; }
    public double buyingPrice { get; set; } // u tablici je float!
    public double spentBuying { get; set; }
    public double currentPrice { get; set; }
    public double boughtShares { get; set; }
    public string name { get; set; }
  }
}
