import { Component } from '@angular/core';
import { Product } from "./product/product";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductModal } from './product-modal/product-modal';


@Component({
  selector: 'app-product-list',
  imports: [ Product,CommonModule,ProductModal],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: any[] = [
    // Education Engineering Equipments
    { productName: 'ASTM Distillation', productImage: 'Education Engineering Equipments/ASTM Distillation.png', productPrice: '0', productDescription: 'High quality ASTM Distillation apparatus.', productService: 'Education Engineering Equipments' },
    { productName: 'Bernoullis Theorem Apparatus', productImage: 'Education Engineering Equipments/Bernoullis Theorem Apparatus.png', productPrice: '0', productDescription: 'Bernoullis Theorem Apparatus for educational labs.', productService: 'Education Engineering Equipments' },
    { productName: 'Bio Diesel Plant', productImage: 'Education Engineering Equipments/Bio Diesel Plant.png', productPrice: '0', productDescription: 'Complete Bio Diesel Plant setup.', productService: 'Education Engineering Equipments' },
    { productName: 'Diffusivity Measurement', productImage: 'Education Engineering Equipments/Diffusivity_Measurement_Apparatus.png', productPrice: '0', productDescription: 'Apparatus for Diffusivity Measurement.', productService: 'Education Engineering Equipments' },
    { productName: 'Flow Through Helical Coil', productImage: 'Education Engineering Equipments/Flow Through Helical Coil.png', productPrice: '0', productDescription: 'Flow Through Helical Coil setup.', productService: 'Education Engineering Equipments' },
    { productName: 'Fluidized Bed Reactor', productImage: 'Education Engineering Equipments/Fluidized Bed Reactor.png', productPrice: '0', productDescription: 'Fluidized Bed Reactor for chemical engineering labs.', productService: 'Education Engineering Equipments' },
    { productName: 'Hybrid Electrochemical Reactor', productImage: 'Education Engineering Equipments/Hybrid Electrochemical Reactor for Sulfur Recovery.png', productPrice: '0', productDescription: 'Hybrid Electrochemical Reactor for Sulfur Recovery.', productService: 'Education Engineering Equipments' },
    { productName: 'Jet Mixer', productImage: 'Education Engineering Equipments/JET MIXER.png', productPrice: '0', productDescription: 'Jet Mixer apparatus.', productService: 'Education Engineering Equipments' },
    { productName: 'Liquid Liquid Diffusion', productImage: 'Education Engineering Equipments/Liquid Liquid Diffusion Apparatus.png', productPrice: '0', productDescription: 'Liquid Liquid Diffusion Apparatus.', productService: 'Education Engineering Equipments' },
    { productName: 'Packed Bed Column', productImage: 'Education Engineering Equipments/Packed Bed Column.png', productPrice: '0', productDescription: 'Packed Bed Column setup.', productService: 'Education Engineering Equipments' },
    { productName: 'Packed Bed Extraction', productImage: 'Education Engineering Equipments/Packed bed extraction.png', productPrice: '0', productDescription: 'Packed Bed Extraction unit.', productService: 'Education Engineering Equipments' },
    { productName: 'Simple Distillation', productImage: 'Education Engineering Equipments/Simple Distillation Apparatus.png', productPrice: '0', productDescription: 'Simple Distillation Apparatus.', productService: 'Education Engineering Equipments' },
    { productName: 'Stefan Boltzman Apparatus', productImage: 'Education Engineering Equipments/Stefan Boltzman Apparatus.png', productPrice: '0', productDescription: 'Stefan Boltzman Apparatus.', productService: 'Education Engineering Equipments' },
    { productName: 'VLE Setup', productImage: 'Education Engineering Equipments/VLE Setup.png', productPrice: '0', productDescription: 'Vapor Liquid Equilibrium Setup.', productService: 'Education Engineering Equipments' },

    // Electrochemical Cells
    { productName: 'Corrosion Electrochemical Cell', productImage: 'Electrochemical cells/Corrosion Electrochemical Cell.png', productPrice: '0', productDescription: 'Corrosion Electrochemical Cell.', productService: 'Electrochemical cells' },
    { productName: 'Electrochemical Cell 01', productImage: 'Electrochemical cells/Electrochemical Cell-01.png', productPrice: '0', productDescription: 'Standard Electrochemical Cell.', productService: 'Electrochemical cells' },
    { productName: 'Electrochemical Cell', productImage: 'Electrochemical cells/Electrochemical Cell.png', productPrice: '0', productDescription: 'Electrochemical Cell unit.', productService: 'Electrochemical cells' },
    { productName: 'Flat Corrosion Cell Acrylic', productImage: 'Electrochemical cells/Flat Corrosion Cell - Acrylic.png', productPrice: '0', productDescription: 'Acrylic Flat Corrosion Cell.', productService: 'Electrochemical cells' },
    { productName: 'Flat Corrosion Cell Glass', productImage: 'Electrochemical cells/Flat Corrosion Cell - Glass.png', productPrice: '0', productDescription: 'Glass Flat Corrosion Cell.', productService: 'Electrochemical cells' },
    { productName: 'Glass Reactor', productImage: 'Electrochemical cells/Glass Reactor.png', productPrice: '0', productDescription: 'Glass Reactor.', productService: 'Electrochemical cells' },
    { productName: 'H-Cell', productImage: 'Electrochemical cells/H-Cell.png', productPrice: '0', productDescription: 'H-Cell setup.', productService: 'Electrochemical cells' },
    { productName: 'Jacketed Vessel', productImage: 'Electrochemical cells/Jacketed Vessel.jpeg', productPrice: '0', productDescription: 'Jacketed Vessel.', productService: 'Electrochemical cells' },
    { productName: 'Microbial Fuel Cell', productImage: 'Electrochemical cells/Microbial Fuel Cell (MFC).png', productPrice: '0', productDescription: 'Microbial Fuel Cell (MFC).', productService: 'Electrochemical cells' },
    { productName: 'Round Bottom 6 Neck Cell', productImage: 'Electrochemical cells/Round Bottom 6 Neck Electrochemical Cell.png', productPrice: '0', productDescription: 'Round Bottom 6 Neck Electrochemical Cell.', productService: 'Electrochemical cells' },
    { productName: 'Three-electrode glass setup', productImage: 'Electrochemical cells/Three-electrode glass setup.png', productPrice: '0', productDescription: 'Three-electrode glass setup.', productService: 'Electrochemical cells' },

    // Gas Purity Test Instruments
    { productName: 'Co2 Purity Tester', productImage: 'Gas Purity Test Instruments/Co2 Purity Tester.png', productPrice: '0', productDescription: 'Co2 Purity Tester.', productService: 'Gas Purity Test Instruments' },
    { productName: 'Dew Point Apparatus', productImage: 'Gas Purity Test Instruments/Dew Point Apparatus.png', productPrice: '0', productDescription: 'Dew Point Apparatus.', productService: 'Gas Purity Test Instruments' },
    { productName: 'Nitrogen Purity Apparatus', productImage: 'Gas Purity Test Instruments/Nitrogen Purity Apparatus.png', productPrice: '0', productDescription: 'Nitrogen Purity Apparatus.', productService: 'Gas Purity Test Instruments' },
    { productName: 'Orsat Apparatus', productImage: 'Gas Purity Test Instruments/Orsat Apparatus.png', productPrice: '0', productDescription: 'Orsat Apparatus.', productService: 'Gas Purity Test Instruments' },
    { productName: 'Oxygen Purity Apparatus', productImage: 'Gas Purity Test Instruments/Oxygen Purity Apparatus.png', productPrice: '0', productDescription: 'Oxygen Purity Apparatus.', productService: 'Gas Purity Test Instruments' },

    // Glass Assemblies & Apparatuses
    { productName: 'Andreasen Pipette Stand', productImage: 'Glass Assemblies & Apparatuses/Andreasen pipette stand.png', productPrice: '0', productDescription: 'Andreasen pipette stand.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Arsenic Determination', productImage: 'Glass Assemblies & Apparatuses/Arsenic Determination Apparatus, Gutzeit.png', productPrice: '0', productDescription: 'Arsenic Determination Apparatus.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Extraction Assembly', productImage: 'Glass Assemblies & Apparatuses/Extraction Assembly With Reflux.png', productPrice: '0', productDescription: 'Extraction Assembly With Reflux.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Fluidized Bed Dryer', productImage: 'Glass Assemblies & Apparatuses/Fluidized Bed Dryer.png', productPrice: '0', productDescription: 'Fluidized Bed Dryer.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Glass Reactor with Stirrer', productImage: 'Glass Assemblies & Apparatuses/Glass Reactor with Stirrer.png', productPrice: '0', productDescription: 'Glass Reactor with Stirrer.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Kjeldahl Nitrogen Distilling', productImage: 'Glass Assemblies & Apparatuses/Kjeldahl Nitrogen Distilling Apparatus.png', productPrice: '0', productDescription: 'Kjeldahl Nitrogen Distilling Apparatus.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Soxhlet Extraction', productImage: 'Glass Assemblies & Apparatuses/Soxhlet Extraction.png', productPrice: '0', productDescription: 'Soxhlet Extraction unit.', productService: 'Glass Assemblies & Apparatuses' },
    { productName: 'Volatile Oil Determination', productImage: 'Glass Assemblies & Apparatuses/Volatile Oil Determination Apparatus.png', productPrice: '0', productDescription: 'Volatile Oil Determination Apparatus.', productService: 'Glass Assemblies & Apparatuses' },

    // Glasswares
    { productName: 'Automatic Burette', productImage: 'Glasswares/Automatic Burette.png', productPrice: '0', productDescription: 'Automatic Burette.', productService: 'Glasswares' },
    { productName: 'Burette', productImage: 'Glasswares/Burette.png', productPrice: '0', productDescription: 'Standard Burette.', productService: 'Glasswares' },
    { productName: 'Drechsel Bottle', productImage: 'Glasswares/Drechsel Bottle.png', productPrice: '0', productDescription: 'Drechsel Bottle.', productService: 'Glasswares' },
    { productName: 'Erlenmeyer Flasks', productImage: 'Glasswares/Erlenmeyer flasks.png', productPrice: '0', productDescription: 'Erlenmeyer Flasks.', productService: 'Glasswares' },
    { productName: 'Flasks', productImage: 'Glasswares/Flasks.png', productPrice: '0', productDescription: 'Assorted Flasks.', productService: 'Glasswares' },

    // Level Glasses
    { productName: 'Industrial Sight Glasses', productImage: 'LEVEL GLASSES AND SIGHT GLASSES/Industrial Sight Glasses.png', productPrice: '0', productDescription: 'Industrial Sight Glasses.', productService: 'Level Glasses' },
    { productName: 'Level Glass', productImage: 'LEVEL GLASSES AND SIGHT GLASSES/Level Glass.png', productPrice: '0', productDescription: 'Level Glass.', productService: 'Level Glasses' },
    { productName: 'Toughened Sight Glasses', productImage: 'LEVEL GLASSES AND SIGHT GLASSES/Toughened Sight Glasses.png', productPrice: '0', productDescription: 'Toughened Sight Glasses.', productService: 'Level Glasses' },

    // Laboratory Instruments
    { productName: 'Acrylic Vacuum Chamber', productImage: 'Laboratory Instruments/Acrylic Vacuum Chamber.png', productPrice: '0', productDescription: 'Acrylic Vacuum Chamber.', productService: 'Laboratory Instruments' },
    { productName: 'COD Digester', productImage: 'Laboratory Instruments/COD Digester.png', productPrice: '0', productDescription: 'COD Digester.', productService: 'Laboratory Instruments' },
    { productName: 'Heating Mantle', productImage: 'Laboratory Instruments/Heating Mantle.png', productPrice: '0', productDescription: 'Heating Mantle.', productService: 'Laboratory Instruments' },
    { productName: 'Hot Air Oven', productImage: 'Laboratory Instruments/Hot Air Oven.png', productPrice: '0', productDescription: 'Hot Air Oven.', productService: 'Laboratory Instruments' },
    { productName: 'Hot Plate', productImage: 'Laboratory Instruments/Hot Plate.png', productPrice: '0', productDescription: 'Hot Plate.', productService: 'Laboratory Instruments' },
    { productName: 'Karl Fischer Titration', productImage: 'Laboratory Instruments/Karl Fischer Titration Unit.png', productPrice: '0', productDescription: 'Karl Fischer Titration Unit.', productService: 'Laboratory Instruments' },
    { productName: 'Magnetic Stirrers', productImage: 'Laboratory Instruments/Magnetic Stirrers.png', productPrice: '0', productDescription: 'Magnetic Stirrers.', productService: 'Laboratory Instruments' },
    { productName: 'Muffle Furnace', productImage: 'Laboratory Instruments/Muffle Furnace.png', productPrice: '0', productDescription: 'Muffle Furnace.', productService: 'Laboratory Instruments' },
    { productName: 'Vacuum Pump', productImage: 'Laboratory Instruments/Vacuum Pump.png', productPrice: '0', productDescription: 'Vacuum Pump.', productService: 'Laboratory Instruments' },

    // Laboratory Platinum Wares
    { productName: 'Platinum Foil Electrode', productImage: 'Laboratory Platinum Wares/Platinum Foil Electrode.png', productPrice: '0', productDescription: 'Platinum Foil Electrode.', productService: 'Platinum Wares' },
    { productName: 'Platinum Labwares', productImage: 'Laboratory Platinum Wares/Platinum Labwares.png', productPrice: '0', productDescription: 'Platinum Labwares.', productService: 'Platinum Wares' },
    { productName: 'Platinum Mesh Electrode', productImage: 'Laboratory Platinum Wares/Platinum Mesh Electrode.png', productPrice: '0', productDescription: 'Platinum Mesh Electrode.', productService: 'Platinum Wares' },
    { productName: 'Platinum Wire', productImage: 'Laboratory Platinum Wares/Platinum Wire.png', productPrice: '0', productDescription: 'Platinum Wire.', productService: 'Platinum Wares' },

    // Petroleum Testing
    { productName: 'ASTM Distillation (Petroleum)', productImage: 'PETROELUM TESTING INSTRUMENTS/ASTM D525-Sample Container.jpg', productPrice: '0', productDescription: 'ASTM D525 Sample Container.', productService: 'Petroleum Testing' },
    { productName: 'All Glass Distillation', productImage: 'PETROELUM TESTING INSTRUMENTS/All Glass Distillation Unit.png', productPrice: '0', productDescription: 'All Glass Distillation Unit.', productService: 'Petroleum Testing' },
    { productName: 'Capillary Viscometers', productImage: 'PETROELUM TESTING INSTRUMENTS/Capillary Viscometers.png', productPrice: '0', productDescription: 'Capillary Viscometers.', productService: 'Petroleum Testing' },
    { productName: 'Dean & Stark Apparatus', productImage: 'PETROELUM TESTING INSTRUMENTS/Dean& Stark apparatus.png', productPrice: '0', productDescription: 'Dean & Stark apparatus.', productService: 'Petroleum Testing' },
    { productName: 'Kinematic Viscosity Bath', productImage: 'PETROELUM TESTING INSTRUMENTS/Kinematic Viscosity Bath.png', productPrice: '0', productDescription: 'Kinematic Viscosity Bath.', productService: 'Petroleum Testing' },
    { productName: 'Melting Point Apparatus', productImage: 'PETROELUM TESTING INSTRUMENTS/Melting Point Apparatus.png', productPrice: '0', productDescription: 'Melting Point Apparatus.', productService: 'Petroleum Testing' },
    { productName: 'Pensky Martin Flashpoint', productImage: 'PETROELUM TESTING INSTRUMENTS/Pensky Martin Flashpoint apparatus.png', productPrice: '0', productDescription: 'Pensky Martin Flashpoint apparatus.', productService: 'Petroleum Testing' },
    { productName: 'Soxhlet Extraction Unit', productImage: 'PETROELUM TESTING INSTRUMENTS/Soxhlet Extraction Unit.png', productPrice: '0', productDescription: 'Soxhlet Extraction Unit.', productService: 'Petroleum Testing' },

    // Pilot Plants
    { productName: 'Distillation Plant', productImage: 'PILOT PLANTS/Distillation Plant.png', productPrice: '0', productDescription: 'Distillation Plant.', productService: 'Pilot Plants' },
    { productName: 'Jacketed Glass Reactor', productImage: 'PILOT PLANTS/Jacketed glass reactor.png', productPrice: '0', productDescription: 'Jacketed glass reactor.', productService: 'Pilot Plants' },

    // Pressure Measuring
    { productName: 'Inclined Manometer', productImage: 'Pressure Measuring Instruments/Inclined Manometer.png', productPrice: '0', productDescription: 'Inclined Manometer.', productService: 'Pressure Measuring' },
    { productName: 'Pressure Gauges', productImage: 'Pressure Measuring Instruments/Pressure Gauges.png', productPrice: '0', productDescription: 'Pressure Gauges.', productService: 'Pressure Measuring' },
    { productName: 'U Tube Manometer', productImage: 'Pressure Measuring Instruments/U tube Manometer.png', productPrice: '0', productDescription: 'U Tube Manometer.', productService: 'Pressure Measuring' },
    { productName: 'Vacuum Manometer', productImage: 'Pressure Measuring Instruments/Vacuum Manometer.png', productPrice: '0', productDescription: 'Vacuum Manometer.', productService: 'Pressure Measuring' },

    // Thermometers
    { productName: 'ASTM Thermometers', productImage: 'Thermometers & Hydrometers/ASTM Thermometers.png', productPrice: '0', productDescription: 'ASTM Thermometers.', productService: 'Thermometers' },
    { productName: 'Hydrometers', productImage: 'Thermometers & Hydrometers/Hydrometes.png', productPrice: '0', productDescription: 'Hydrometers.', productService: 'Thermometers' },
    { productName: 'Industrial IR Thermometers', productImage: 'Thermometers & Hydrometers/industrial IR thermometers.png', productPrice: '0', productDescription: 'Industrial IR Thermometers.', productService: 'Thermometers' }
  ];

  /*
     ngOnInit():void{
    this.http.get('https://gomath-backend.onrender.com/products').subscribe((res:any)=>{
      this.products=res.data;
      
    })
  }

  constructor(private http:HttpClient){

  }
  */
  
  // Cleaned up init:
  ngOnInit() {
    // Local data already assigned
  }

  selectedProduct: any = null;

showProductModal(product: any) {
  console.log(product)
  this.selectedProduct = product;
}



  

}
