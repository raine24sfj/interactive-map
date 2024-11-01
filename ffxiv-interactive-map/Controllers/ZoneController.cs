using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ffxiv_interactive_map.Controllers;

[ApiController]
public class ZoneController : ControllerBase
{
    [HttpGet("/[controller]/{id}")]
    private async Task<IActionResult> GetZoneData(string id)
    {
        return Ok();
    }
}