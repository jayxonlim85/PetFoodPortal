using System.Collections.Generic;
using System.Threading.Tasks;
using api.Context;
using api.ViewModels;
using api.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace api.Services {
    public class OfferService : IOfferService
    {
        private readonly MyContext _context;

        public OfferService(MyContext myContext) {
            _context = myContext;
        }

        public async Task<IEnumerable<OfferViewModel>> GetOffers()
        {
            var offers = await _context.Offers.Select(o => new OfferViewModel() {
                Id = o.Id,
                ShipmentNumber = o.ShipmentNumber,
                Currency = o.Currency,
                DeliveryDateTime = o.DeliveryDateTime,
                DeliveryLocationName = o.DeliveryLocationName,
                LoadDetail1 = o.LoadDetail1,
                LoadDetail2 = o.LoadDetail2,
                LoadDetail3 = o.LoadDetail3,
                PickupDateTime = o.PickupDateTime,
                PickupLocationName = o.PickupLocationName,
                Price = o.Price,
                VehicleBuildUp = o.VehicleBuildUp,
                VehicleSize = o.VehicleSize
            }).ToListAsync();

            return offers;
        }

        public async Task<OfferViewModel> GetOffer(string id)
        {
            Guid newGuid = Guid.Parse(id);
            var offer = await _context.Offers.FirstOrDefaultAsync(item => item.Id == newGuid);

            return new OfferViewModel() {
                Id = offer.Id,
                ShipmentNumber = offer.ShipmentNumber,
                Currency = offer.Currency,
                DeliveryDateTime = offer.DeliveryDateTime,
                DeliveryLocationName = offer.DeliveryLocationName,
                LoadDetail1 = offer.LoadDetail1,
                LoadDetail2 = offer.LoadDetail2,
                LoadDetail3 = offer.LoadDetail3,
                PickupDateTime = offer.PickupDateTime,
                PickupLocationName = offer.PickupLocationName,
                Price = offer.Price,
                VehicleBuildUp = offer.VehicleBuildUp,
                VehicleSize = offer.VehicleSize
            };
        }

        public void CreateOffer(OfferViewModel param)
        {
            _context.Add(param);
            _context.SaveChanges();
        }

        public void UpdateOffer(OfferViewModel param)
        {
            var entity = _context.Offers.FirstOrDefault(item => item.Id == param.Id);
            entity.Id = param.Id;
            entity.ShipmentNumber = param.ShipmentNumber;
            entity.Currency = param.Currency;
            entity.DeliveryDateTime = param.DeliveryDateTime;
            entity.DeliveryLocationName = param.DeliveryLocationName;
            entity.LoadDetail1 = param.LoadDetail1;
            entity.LoadDetail2 = param.LoadDetail2;
            entity.LoadDetail3 = param.LoadDetail3;
            entity.PickupDateTime = param.PickupDateTime;
            entity.PickupLocationName = param.PickupLocationName;
            entity.Price = param.Price;
            entity.VehicleBuildUp = param.VehicleBuildUp;
            entity.VehicleSize = param.VehicleSize;

            _context.SaveChanges();
        }

        public void DeleteOffer(string id)
        {
            Guid newGuid = Guid.Parse(id);

            Offer offer = new Offer () { Id = newGuid };
            _context.Offers.Attach(offer);
            _context.Offers.Remove(offer);
            _context.SaveChanges();
        }
    }
}