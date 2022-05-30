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

    public DbSet<Users> Users { get; set; }
    public DbSet<ValuePapers> ValuePapers { get; set; }
    public DbSet<BoughtPapers> BoughtPapers { get; set; }
  }
}
