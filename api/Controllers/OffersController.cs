using System.Threading.Tasks;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using api.ViewModels;

namespace api {

    [Route("api/offers")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IOfferService _offerService;
        public OffersController(IOfferService offerService) {
            _offerService = offerService;
        }

        [HttpGet]
        public async Task<ActionResult> GetOffers() {
            var offers = await _offerService.GetOffers();
            return new OkObjectResult(offers);
        }

         [HttpGet("{id}")]
         public async Task<ActionResult> GetOffer(string id) {
            var offers = await _offerService.GetOffer(id);
             return new OkObjectResult(offers);
         }

        [HttpPost]
        public void CreateOffer([FromBody] OfferViewModel param)
        {
            _offerService.CreateOffer(param);
        }

        [HttpPut]
        public void UpdateOffer(OfferViewModel param)
        {
            _offerService.UpdateOffer(param);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _offerService.DeleteOffer(id);
        }
    }
}