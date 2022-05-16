using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Models
{
  public class UserRequest
  {
    public int Id { get; set; }
    public string username { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string password { get; set; }

  }
}
