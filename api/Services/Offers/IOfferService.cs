using System.Collections.Generic;
using System.Threading.Tasks;
using api.ViewModels;

namespace api.Services {
    public interface IOfferService {
        Task<IEnumerable<OfferViewModel>> GetOffers();

        Task<OfferViewModel> GetOffer(string id);

        void CreateOffer(OfferViewModel param);

        void UpdateOffer(OfferViewModel param);

        void DeleteOffer(string id);
    }
}