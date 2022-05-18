using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValueCalcWebApp.Data
{
  public class ValueCalcDbContext: DbContext
  {
    public ValueCalcDbContext(DbContextOptions<ValueCalcDbContext> options) : base(options)
    {

    }

    public DbSet<tblUser> tblUsers { get; set; }
    public DbSet<Users> Users { get; set; }

  }
}
