import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

interface Formation {
  title: string;
  regions: Region[];
}

interface Region {
  name: string;
  total: string;
  establishments: Establishment[];
}

interface Establishment {
  name: string;
  classes: string;
  progression: number;
  percentage: string;
}

interface KitType {
  name: string;
  remaining: number;
}

interface RegionKits {
  name: string;
  total: number;
  isLow: boolean;
  kits: KitType[];
}

interface ElectionEstablishment {
  name: string;
  completed: string;
  progression: number;
}

interface ElectionRegion {
  name: string;
  total: string;
  percentage: string;
  progression: number;
  establishments: ElectionEstablishment[];
}

interface ActivityEstablishment {
  name: string;
  inscriptions: string;
}

interface ActivityRegion {
  name: string;
  total: string;
  establishments: ActivityEstablishment[];
}

interface Activity {
  name: string;
  regions: ActivityRegion[];
}

interface TrainingRate {
  name: string;
  total: string;
  percentage: string;
  animators: Animator[];
}

interface Animator {
  name: string;
  count: string;
  percentage: string;
}

interface SupervisionRate {
  name: string;
  animators: SupervisionAnimator[];
}

interface SupervisionAnimator {
  name: string;
  formationCount: string;
  supervisionCount: string;
}

interface TeamSupervision {
  location: string;
  months: {
    oct?: 'V' | 'X';
    nov?: 'V' | 'X';
    dec?: 'V' | 'X';
    jan?: 'V' | 'X';
    fev?: 'V' | 'X';
    mars?: 'V' | 'X';
    avr?: 'V' | 'X';
    mai?: 'V' | 'X';
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private sidebarService: SidebarService) {}

  get isSidebarCollapsed() {
    return this.sidebarService.getIsCollapsed();
  }

  isExpanded = true;
  isKitsExpanded = true;
  isElectionsExpanded = true;
  isActivitiesExpanded = true;
  isQuestionsExpanded = true;
  isPlansExpanded = true;
  isTrainingRatesExpanded = true;
  isSupervisionRatesExpanded = true;
  isTeamSupervisionExpanded = true;
  selectedEtablissement: any;
  selectedCommune: any;

  formations: Formation[] = [
    {
      title: "1ᵉ formation des filles - 1ᵉʳ cycle",
      regions: [
        {
          name: "COMÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "12/12", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "22/22", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "10/16",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "2/6", progression: 20, percentage: "20%" },
            { name: "CEG AKPASSI", classes: "2/4", progression: 50, percentage: "50%" },
            { name: "CEG ANOUDE", classes: "6/6", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "20/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "20/24", progression: 45, percentage: "45%" },
            { name: "CEG 1 DOUTOU", classes: "4/19", progression: 21, percentage: "21%" },
            { name: "CEG AHOULOUMÈ", classes: "3/8", progression: 35, percentage: "35%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    },
    {
      title: "1ᵉ formation des filles - 2ᵉ cycle",
      regions: [
        {
          name: "COMÈ",
          total: "51/51",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "19/19", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "21/21", progression: 100, percentage: "100%" },
            { name: "CEG AKPASSI", classes: "13/13", progression: 100, percentage: "100%" },
            { name: "CEG ANOUDE", classes: "11/11", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "51/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 1 DOUTOU", classes: "19/19", progression: 100, percentage: "100%" },
            { name: "CEG AHOULOUMÈ", classes: "8/8", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    },
    {
      title: "2ᵉ formation des filles - 1ᵉʳ cycle",
      regions: [
        {
          name: "COMÈ",
          total: "51/51",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "19/19", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "21/21", progression: 100, percentage: "100%" },
            { name: "CEG AKPASSI", classes: "13/13", progression: 100, percentage: "100%" },
            { name: "CEG ANOUDE", classes: "11/11", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "51/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 1 DOUTOU", classes: "19/19", progression: 100, percentage: "100%" },
            { name: "CEG AHOULOUMÈ", classes: "8/8", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    },
    {
      title: "2ᵉ formation des filles - 2ᵉ cycle",
      regions: [
        {
          name: "COMÈ",
          total: "51/51",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "19/19", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "21/21", progression: 100, percentage: "100%" },
            { name: "CEG AKPASSI", classes: "13/13", progression: 100, percentage: "100%" },
            { name: "CEG ANOUDE", classes: "11/11", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "51/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 1 DOUTOU", classes: "19/19", progression: 100, percentage: "100%" },
            { name: "CEG AHOULOUMÈ", classes: "8/8", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    },
    {
      title: "3ᵉ formation des filles - 1ᵉʳ cycle",
      regions: [
        {
          name: "COMÈ",
          total: "51/51",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "19/19", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "21/21", progression: 100, percentage: "100%" },
            { name: "CEG AKPASSI", classes: "13/13", progression: 100, percentage: "100%" },
            { name: "CEG ANOUDE", classes: "11/11", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "51/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 1 DOUTOU", classes: "19/19", progression: 100, percentage: "100%" },
            { name: "CEG AHOULOUMÈ", classes: "8/8", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    },
    {
      title: "Sensibilisation des garçons",
      regions: [
        {
          name: "COMÈ",
          total: "51/51",
          establishments: [
            { name: "CEG 2 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG 4 COMÈ", classes: "16/16", progression: 100, percentage: "100%" },
            { name: "CEG AKODEHA", classes: "19/19", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "BANTÈ",
          total: "45/45",
          establishments: [
            { name: "CEG 1 BANTÈ", classes: "21/21", progression: 100, percentage: "100%" },
            { name: "CEG AKPASSI", classes: "13/13", progression: 100, percentage: "100%" },
            { name: "CEG ANOUDE", classes: "11/11", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "51/51",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 1 DOUTOU", classes: "19/19", progression: 100, percentage: "100%" },
            { name: "CEG AHOULOUMÈ", classes: "8/8", progression: 100, percentage: "100%" }
          ]
        },
        {
          name: "SAVALOU",
          total: "44/44",
          establishments: [
            { name: "CEG 1 SAVALOU", classes: "24/24", progression: 100, percentage: "100%" },
            { name: "CEG 2 SAVALOU", classes: "11/11", progression: 100, percentage: "100%" },
            { name: "CEG TCHOGODO", classes: "9/9", progression: 100, percentage: "100%" }
          ]
        }
      ]
    }
  ];

  regionKits: RegionKits[] = [
    {
      name: "BANTÈ",
      total: 113,
      isLow: true,
      kits: [
        { name: "Kits moyens de 4", remaining: 0 },
        { name: "Kits moyens de 2", remaining: 72 },
        { name: "Grands kits de 4", remaining: 41 },
        { name: "Grands kits de 2", remaining: 0 }
      ]
    },
    {
      name: "COMÈ",
      total: 890,
      isLow: false,
      kits: [
        { name: "Kits moyens de 4", remaining: 100 },
        { name: "Kits moyens de 2", remaining: 280 },
        { name: "Grands kits de 4", remaining: 310 },
        { name: "Grands kits de 2", remaining: 200 }
      ]
    },
    {
      name: "HOUÉYOGBÉ",
      total: 1070,
      isLow: false,
      kits: [
        { name: "Kits moyens de 4", remaining: 500 },
        { name: "Kits moyens de 2", remaining: 300 },
        { name: "Grands kits de 4", remaining: 200 },
        { name: "Grands kits de 2", remaining: 70 }
      ]
    },
    {
      name: "SAVALOU",
      total: 113,
      isLow: true,
      kits: [
        { name: "Kits moyens de 4", remaining: 0 },
        { name: "Kits moyens de 2", remaining: 72 },
        { name: "Grands kits de 4", remaining: 41 },
        { name: "Grands kits de 2", remaining: 0 }
      ]
    }
  ];

  elections: ElectionRegion[] = [
    {
      name: "BANTÈ",
      total: "28/28",
      percentage: "100%",
      progression: 100,
      establishments: [
        { name: "CEG 1 BANTÈ", completed: "6/6", progression: 100 },
        { name: "CEG AKPASSI", completed: "10/10", progression: 100 },
        { name: "CEG ANOUDE", completed: "12/12", progression: 100 }
      ]
    },
    {
      name: "COMÈ",
      total: "10/25",
      percentage: "40%",
      progression: 40,
      establishments: [
        { name: "CEG 2 COMÈ", completed: "0/3", progression: 0 },
        { name: "CEG 4 COMÈ", completed: "10/10", progression: 100 },
        { name: "CEG AKODEHA", completed: "0/12", progression: 0 }
      ]
    },
    {
      name: "HOUÉYOGBÉ",
      total: "26/31",
      percentage: "83.87%",
      progression: 83.87,
      establishments: [
        { name: "CEG HOUÉYOGBÉ", completed: "5/10", progression: 50 },
        { name: "CEG 1 DOUTOU", completed: "9/9", progression: 100 },
        { name: "CEG AHOULOUMÈ", completed: "12/12", progression: 100 }
      ]
    },
    {
      name: "SAVALOU",
      total: "33/33",
      percentage: "100%",
      progression: 100,
      establishments: [
        { name: "CEG 1 SAVALOU", completed: "3/3", progression: 100 },
        { name: "CEG 2 SAVALOU", completed: "9/9", progression: 100 },
        { name: "CEG TCHOGODO", completed: "12/12", progression: 100 }
      ]
    }
  ];

  activities: Activity[] = [
    {
      name: "SLAM",
      regions: [
        {
          name: "BANTÈ",
          total: "45",
          establishments: [
            { name: "CEG 1 BANTÈ", inscriptions: "21" },
            { name: "CEG AKPASSI", inscriptions: "13" },
            { name: "CEG ANOUDE", inscriptions: "11" }
          ]
        },
        {
          name: "COMÈ",
          total: "45",
          establishments: [
            { name: "CEG 2 COMÈ", inscriptions: "21" },
            { name: "CEG 4 COMÈ", inscriptions: "13" },
            { name: "CEG AKODEHA", inscriptions: "11" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "45",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", inscriptions: "21" },
            { name: "CEG 1 DOUTOU", inscriptions: "13" },
            { name: "CEG AHOULOUMÈ", inscriptions: "11" }
          ]
        },
        {
          name: "SAVALOU",
          total: "45",
          establishments: [
            { name: "CEG 1 SAVALOU", inscriptions: "21" },
            { name: "CEG 2 SAVALOU", inscriptions: "13" },
            { name: "CEG TCHOGODO", inscriptions: "11" }
          ]
        }
      ]
    },
    {
      name: "ART PLASTIQUE",
      regions: [
        {
          name: "BANTÈ",
          total: "45",
          establishments: [
            { name: "CEG 1 BANTÈ", inscriptions: "21" },
            { name: "CEG AKPASSI", inscriptions: "13" },
            { name: "CEG ANOUDE", inscriptions: "11" }
          ]
        },
        {
          name: "COMÈ",
          total: "45",
          establishments: [
            { name: "CEG 2 COMÈ", inscriptions: "21" },
            { name: "CEG 4 COMÈ", inscriptions: "13" },
            { name: "CEG AKODEHA", inscriptions: "11" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "45",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", inscriptions: "21" },
            { name: "CEG 1 DOUTOU", inscriptions: "13" },
            { name: "CEG AHOULOUMÈ", inscriptions: "11" }
          ]
        },
        {
          name: "SAVALOU",
          total: "45",
          establishments: [
            { name: "CEG 1 SAVALOU", inscriptions: "21" },
            { name: "CEG 2 SAVALOU", inscriptions: "13" },
            { name: "CEG TCHOGODO", inscriptions: "11" }
          ]
        }
      ]
    },
    {
      name: "THÉÂTRE",
      regions: [
        {
          name: "BANTÈ",
          total: "45",
          establishments: [
            { name: "CEG 1 BANTÈ", inscriptions: "21" },
            { name: "CEG AKPASSI", inscriptions: "13" },
            { name: "CEG ANOUDE", inscriptions: "11" }
          ]
        },
        {
          name: "COMÈ",
          total: "45",
          establishments: [
            { name: "CEG 2 COMÈ", inscriptions: "21" },
            { name: "CEG 4 COMÈ", inscriptions: "13" },
            { name: "CEG AKODEHA", inscriptions: "11" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "45",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", inscriptions: "21" },
            { name: "CEG 1 DOUTOU", inscriptions: "13" },
            { name: "CEG AHOULOUMÈ", inscriptions: "11" }
          ]
        },
        {
          name: "SAVALOU",
          total: "45",
          establishments: [
            { name: "CEG 1 SAVALOU", inscriptions: "21" },
            { name: "CEG 2 SAVALOU", inscriptions: "13" },
            { name: "CEG TCHOGODO", inscriptions: "11" }
          ]
        }
      ]
    },
    {
      name: "CHAMPIONNE GHM",
      regions: [
        {
          name: "BANTÈ",
          total: "45",
          establishments: [
            { name: "CEG 1 BANTÈ", inscriptions: "21" },
            { name: "CEG AKPASSI", inscriptions: "13" },
            { name: "CEG ANOUDE", inscriptions: "11" }
          ]
        },
        {
          name: "COMÈ",
          total: "45",
          establishments: [
            { name: "CEG 2 COMÈ", inscriptions: "21" },
            { name: "CEG 4 COMÈ", inscriptions: "13" },
            { name: "CEG AKODEHA", inscriptions: "11" }
          ]
        },
        {
          name: "HOUÉYOGBÉ",
          total: "45",
          establishments: [
            { name: "CEG HOUÉYOGBÉ", inscriptions: "21" },
            { name: "CEG 1 DOUTOU", inscriptions: "13" },
            { name: "CEG AHOULOUMÈ", inscriptions: "11" }
          ]
        },
        {
          name: "SAVALOU",
          total: "45",
          establishments: [
            { name: "CEG 1 SAVALOU", inscriptions: "21" },
            { name: "CEG 2 SAVALOU", inscriptions: "13" },
            { name: "CEG TCHOGODO", inscriptions: "11" }
          ]
        }
      ]
    }
  ];

  trainingRates: TrainingRate[] = [
    {
      name: 'BANTÈ',
      total: '96/227',
      percentage: '42%',
      animators: [
        { name: 'AGBRA Flora', count: '26/96', percentage: '27%' },
        { name: 'CHABI Mouzaffarath', count: '40/96', percentage: '42%' },
        { name: 'CHANOU Germaine', count: '30/96', percentage: '31%' }
      ]
    },
    {
      name: 'COMÈ',
      total: '104/260',
      percentage: '40%',
      animators: [
        { name: 'AYENA Isleny', count: '46/104', percentage: '44%' },
        { name: 'GBANNAN Roseline', count: '28/104', percentage: '27%' },
        { name: 'SOUNOU Ambroisine', count: '30/104', percentage: '29%' }
      ]
    },
    {
      name: 'HOUÉYOGBÉ',
      total: '49/246',
      percentage: '32%',
      animators: [
        { name: 'AHOUANNOUGAN Grâce', count: '19/99', percentage: '34%' },
        { name: 'COUKOUI Parfaite', count: '10/99', percentage: '33%' },
        { name: 'EDOH Rosa', count: '20/99', percentage: '32%' }
      ]
    },
    {
      name: 'SAVALOU',
      total: '114/205',
      percentage: '32%',
      animators: [
        { name: 'AFFO Pauline', count: '39/114', percentage: '34%' },
        { name: 'DEFODJI Flora', count: '31/104', percentage: '27%' },
        { name: 'KOBA Rolande', count: '44/104', percentage: '39%' }
      ]
    }
  ];

  supervisionRates: SupervisionRate[] = [
    {
      name: 'BANTÈ',
      animators: [
        { name: 'AGBRA Flora', formationCount: '12', supervisionCount: '39/114' },
        { name: 'CHABI Mouzaffarath', formationCount: '7', supervisionCount: '31/104' },
        { name: 'CHANOU Germaine', formationCount: '8', supervisionCount: '44/104' }
      ]
    },
    {
      name: 'COMÈ',
      animators: [
        { name: 'SOUNOU Ambroisine', formationCount: '12', supervisionCount: '39/114' },
        { name: 'GBANNAN Roseline', formationCount: '7', supervisionCount: '31/104' },
        { name: 'COUKOUI Parfaite', formationCount: '8', supervisionCount: '44/104' }
      ]
    },
    {
      name: 'HOUÉYOGBÉ',
      animators: [
        { name: 'COUKOUI Parfaite', formationCount: '12', supervisionCount: '39/114' },
        { name: 'EDOH Rosa', formationCount: '7', supervisionCount: '31/104' },
        { name: 'CHANOU Germaine', formationCount: '8', supervisionCount: '44/104' }
      ]
    },
    {
      name: 'HOUÉYOGBÉ',
      animators: [
        { name: 'COUKOUI Parfaite', formationCount: '12', supervisionCount: '39/114' },
        { name: 'EDOH Rosa', formationCount: '7', supervisionCount: '31/104' },
        { name: 'CHANOU Germaine', formationCount: '8', supervisionCount: '44/104' }
      ]
    }
  ];

  teamSupervisions: TeamSupervision[] = [
    {
      location: 'Bopa',
      months: {
        jan: 'X'
      }
    },
    {
      location: 'Bohicon',
      months: {
        oct: 'V',
        nov: 'V',
        dec: 'X'
      }
    },
    {
      location: 'Djougou Zountori',
      months: {
        oct: 'X',
        nov: 'V',
        mars: 'V',
        avr: 'V',
        mai: 'V'
      }
    },
    {
      location: 'Djougou Taffa',
      months: {
        nov: 'V'
      }
    }
  ];

  getProgressColor(percentage: number): string {
    if (percentage >= 100) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  toggleKitsExpand() {
    this.isKitsExpanded = !this.isKitsExpanded;
  }

  toggleElectionsExpand() {
    this.isElectionsExpanded = !this.isElectionsExpanded;
  }

  toggleActivitiesExpand() {
    this.isActivitiesExpanded = !this.isActivitiesExpanded;
  }

  toggleQuestionsExpand() {
    this.isQuestionsExpanded = !this.isQuestionsExpanded;
  }

  togglePlansExpand() {
    this.isPlansExpanded = !this.isPlansExpanded;
  }

  toggleTrainingRatesExpand() {
    this.isTrainingRatesExpanded = !this.isTrainingRatesExpanded;
  }

  toggleSupervisionRatesExpand() {
    this.isSupervisionRatesExpanded = !this.isSupervisionRatesExpanded;
  }

  toggleTeamSupervisionExpand() {
    this.isTeamSupervisionExpanded = !this.isTeamSupervisionExpanded;
  }
}
