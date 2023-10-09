using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
using PetStore.Context;
using PetStore.Dtos;
using PetStore.Entities;

namespace PetStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        //CRUD --> Create  - Read - Update - Delete


        //Create
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateUpdateProductDto dto)
        {
            var newProduct = new ProductEntity()
            {
                Brand = dto.Brand,
                Title = dto.Title,
            };
            await _context.Products.AddAsync(newProduct);
            await _context.SaveChangesAsync();
            return Ok("Ürün başarıyla kaydedildi");
        }


        //Read
        [HttpGet]
        public async Task<ActionResult<List<ProductEntity>>> GetAllProducts()
        {
            var product = await _context.Products.OrderByDescending(q => q.UpdatedAt).ToListAsync();
            return Ok(product);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<ProductEntity>> GetProductById([FromRoute] long id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            if(product == null)
            {
                return NotFound("Ürün bulunamadı");
            }
            return Ok(product);
        }


        //Update
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] long id, [FromBody] CreateUpdateProductDto dto)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id==id);

            if(product == null)
            {
                return NotFound("Ürün bulunamadı");
            }
            product.Title = dto.Title;
            product.Brand = dto.Brand;
            product.UpdatedAt = DateTime.Now;
            await _context.SaveChangesAsync();
            return Ok("Ürün başarıyla güncellendi");
        }

        //Delete
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] long id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            if(product == null)
            {
                return NotFound("Ürün bulunamadı");
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return Ok("Ürün silindi");
        }
   
         

    }
}
