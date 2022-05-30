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
    public string buyingPrice { get; set; }
    public string spentBuying { get; set; }
    public string currentPrice { get; set; }
    public string boughtShares { get; set; }

    public string pname { get; set; }
  }
}
