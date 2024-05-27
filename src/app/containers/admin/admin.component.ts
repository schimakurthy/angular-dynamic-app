import { Component, OnInit } from '@angular/core';
import { SECTION_DATA } from 'src/app/shared/constants/data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sectionConfig: any; // Config for fields
  sectionData: any; // capture data entered in the fields // also use to get data from api and load the form
  sectionConfigLookup: { [sectionId: string]: any } = {};

  ngOnInit(): void {}

  updateSectionData(sectionData: any) {
    this.sectionData = sectionData;
  }

  addComponent() {
    // Get config for each section or each form
    // Make a service call
    const mapSectionConfig = (sectionConfig: any) => {
      this.sectionConfigLookup[sectionConfig.sectionId] = sectionConfig;
      sectionConfig.subsections.forEach(mapSectionConfig);
    };

    this.sectionConfig = SECTION_DATA;
    mapSectionConfig(SECTION_DATA);
  }
}
