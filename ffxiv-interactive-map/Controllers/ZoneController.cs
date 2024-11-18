using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ffxiv_interactive_map.Controllers;

[ApiController]
public class ZoneController : ControllerBase
{
    [HttpGet("/[controller]/{zone}")]
    private IActionResult GetZoneData(string zone)
    {
        return Ok();
    }
}