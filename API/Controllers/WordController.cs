using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordController : ControllerBase
    {
        private readonly DataContext context;

        public WordController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Word>>> GetWords() => await context.Words.ToListAsync();


        [HttpGet]
        [Route("GetWordById/{id}")]
        public async Task<ActionResult<Word>> GetWordById(Guid id) => await context.Words.SingleAsync(c => c.Id == id);


        [HttpGet]
        [Route("GetWordByName/{name}")]
        public async Task<ActionResult<Word?>> GetWordByName(string name) => await context.Words.SingleOrDefaultAsync(c => c.Name == name);


        [HttpPost]
        public async Task<IActionResult> CreateWord([FromBody] Word word)
        {
            context.Add(word);
            await context.SaveChangesAsync();
            return Ok(word);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWord(Guid id, Word word)
        {
            word.Id = id;
            context.Update(word);
            await context.SaveChangesAsync();
            return Ok(word);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWord(Guid id)
        {
            var word= context.Words.Single(c => c.Id == id);
            context.Remove(word);
            await context.SaveChangesAsync();
            return Ok(word);
        }
        
    }
}
