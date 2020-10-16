﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Context;

namespace api.Migrations
{
    [DbContext(typeof(MyContext))]
    partial class MyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("api.Models.Offer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Currency");

                    b.Property<long>("DeliveryDateTime");

                    b.Property<string>("DeliveryLocationName");

                    b.Property<string>("LoadDetail1");

                    b.Property<string>("LoadDetail2");

                    b.Property<string>("LoadDetail3");

                    b.Property<long>("PickupDateTime");

                    b.Property<string>("PickupLocationName");

                    b.Property<decimal>("Price");

                    b.Property<string>("ShipmentNumber");

                    b.Property<string>("VehicleBuildUp");

                    b.Property<string>("VehicleSize");

                    b.HasKey("Id");

                    b.ToTable("Offers");
                });
#pragma warning restore 612, 618
        }
    }
}
