using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using product_group;
using product_group.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ProductInfo.Controllers
{
    [Route("api/[controller]")]
    public class TextAreaController : Controller
    {
        private readonly TextContext _context;

       public TextAreaController(TextContext context)
        {
            _context = context;

        }

                   [HttpGet]
            public async Task<List<TextArea>> GetAll()
            {
                return await _context.TextArea.ToListAsync();
            }

            // public IActionResult GetById(int id)
            // {
            //     var item = _context.Product_Info.FirstOrDefault(t => t.Id == id);
            //     if (item == null)
            //     {
            //         return NotFound();
            //     }
            //     return new ObjectResult(item);
            // }
            [HttpPost]
            public async Task CreateAsync([FromBody] TextArea item)
            {
                _context.TextArea.Add(item);
                await _context.SaveChangesAsync();
            }    
   }
}