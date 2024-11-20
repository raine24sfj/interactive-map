using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace InteractiveMap.API.Controllers;

[ApiController]
[Route("[controller]/zone")]
public class ZoneController : ControllerBase
{
    [HttpGet]
    [Route("/{zone}")]
    public IActionResult GetZone(string zone)
    {
        return zone switch
        {
            "anemos" => Ok("Anemos"),
            "pagos" => Ok("Pagos"),
            "pyros" => Ok("Pyros"),
            "hydatos" => Ok("Hydatos"),
            _ => NotFound()
        };
    }
}

