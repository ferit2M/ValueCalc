using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Data
{
  public class BoughtPapers
  {
    public int userId { get; set; }
    [Key]
    public int paperId { get; set; }
  }
}
