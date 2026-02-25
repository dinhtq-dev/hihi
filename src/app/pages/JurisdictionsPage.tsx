import { Check, X, Phone, ChevronDown, Play, Info, Globe, Search, Filter, Clock, DollarSign, FileText, Scale, Building2, Users, Shield, ArrowUpDown, ArrowUp, ArrowDown, CheckCircle, Award, Headphones, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bannerImage from 'figma:asset/f1075bf3a921d27c2aa815a3f5c9f5e88afb7241.png';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';
import svgPaths from '@/imports/svg-gtr06sdyse';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Flag Components
function HongKongFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.82%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17.8475">
            <path d={svgPaths.pf335800} fill="#EE1C25" />
          </svg>
        </div>
        <div className="absolute inset-[29.6%_45.2%_50.1%_43.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.77771 4.872">
            <g>
              <path d={svgPaths.p26727500} fill="white" />
              <path d={svgPaths.p3926b8c0} fill="#EE1C25" />
            </g>
          </svg>
        </div>
        <div className="absolute contents inset-[38.01%_30.07%_32.39%_34.7%]">
          <div className="absolute bottom-[50.43%] left-1/2 right-[30.07%] top-[38.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.784 2.7728">
              <g>
                <path d={svgPaths.p1d701480} fill="white" />
                <path d={svgPaths.p3d51af00} fill="#EE1C25" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[50.4%_48.15%_32.39%_34.7%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.11521 4.12927">
              <g>
                <path d={svgPaths.p10af6980} fill="white" />
                <path d={svgPaths.p27d2d6c0} fill="#EE1C25" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute contents inset-[42.47%_37%_32.93%_31.92%]">
          <div className="absolute inset-[48.77%_37%_32.93%_50.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01645 4.39034">
              <g>
                <path d={svgPaths.p2f649f00} fill="white" />
                <path d={svgPaths.p21b4be00} fill="#EE1C25" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[42.47%_50.33%_44.26%_31.92%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25871 3.18535">
              <g>
                <path d={svgPaths.pf20ff00} fill="white" />
                <path d={svgPaths.p2524f480} fill="#EE1C25" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MalaysiaFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_-25%_-25%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <g>
              <path d={svgPaths.p8cb3b00} fill="white" />
              <path d={svgPaths.p3dbacd80} fill="#CC0000" />
              <path d={svgPaths.p26e2400} fill="#000066" />
              <path d={svgPaths.p1d18f380} fill="#CC0000" />
              <path d={svgPaths.p31568180} fill="#FFCC00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SingaporeFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_27_8430)">
          <path d={svgPaths.p13cbcb80} fill="white" />
          <path d={svgPaths.p22655500} fill="#ED2939" />
          <path d={svgPaths.p297aca80} fill="white" />
          <path d={svgPaths.p26c9a80} fill="#ED2939" />
          <path d={svgPaths.p239aee00} fill="white" />
          <g>
            <path d={svgPaths.p35aae780} fill="white" />
            <path d={svgPaths.p36f3b00} fill="white" />
          </g>
          <g>
            <path d={svgPaths.p2abeb200} fill="white" />
            <path d={svgPaths.p3c790100} fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_8430">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VietnamFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_27_8450)">
          <path d={svgPaths.p13cbcb80} fill="#DA251D" />
          <path d={svgPaths.p37945540} fill="#FFFF00" />
        </g>
        <defs>
          <clipPath id="clip0_27_8450">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MarshallIslandsFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_27_8397)">
          <path d={svgPaths.p3e719480} fill="white" />
          <path d={svgPaths.p18e7ef80} fill="#003893" />
          <path d={svgPaths.p3e3f5d80} fill="#003893" />
          <path d={svgPaths.p3d78eb10} fill="#DD7500" />
          <path d={svgPaths.pb92ba80} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_27_8397">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SamoaFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_30_28834)">
          <path d={svgPaths.p13cbcb80} fill="#CE1126" />
          <path d={svgPaths.p14ae9700} fill="#002B7F" />
          <g>
            <path d={svgPaths.p209a7400} fill="white" />
            <path d={svgPaths.p23950d00} fill="white" />
            <path d={svgPaths.p174c7900} fill="white" />
            <path d={svgPaths.pc3d5e00} fill="white" />
            <path d={svgPaths.pe72f7f0} fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_30_28834">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VanuatuFlag() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_30_28815)">
          <path d={svgPaths.p22655500} fill="#D21034" />
          <path d={svgPaths.p361ad7f0} fill="#009543" />
          <path d={svgPaths.p67a2380} fill="black" />
          <path d={svgPaths.pa0a81c0} fill="black" />
          <path d={svgPaths.ped9e400} fill="#FDCE12" />
          <path d={svgPaths.p25fb1eb0} fill="#FDCE12" />
          <path d={svgPaths.p35cc3780} fill="black" />
          <path d={svgPaths.p2bf70c00} fill="#FDCE12" />
          <g>
            <path d={svgPaths.p1f84c700} fill="#FDCE12" stroke="#FDCE12" strokeMiterlimit="2.53" strokeWidth="0.04" />
            <path d={svgPaths.p3d5f26f0} fill="#FDCE12" />
          </g>
          <g>
            <path d={svgPaths.p238f0280} fill="#FDCE12" stroke="#FDCE12" strokeMiterlimit="2.53" strokeWidth="0.04" />
            <path d={svgPaths.p2de7f372} fill="#FDCE12" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_30_28815">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Jurisdiction {
  flag: React.ReactNode;
  country: string;
  region: string;
  companyOfficersPublic: string;
  paidUpCapital: string;
  standardShareCapital: string;
  accountingReq: string;
  taxation: string;
  legalSystem: string;
  timeToForm: string;
  minShareholders: string;
  bearerShares: string;
  type: string;
  slug?: string;
}

const jurisdictions: Jurisdiction[] = [
  // ASIA PACIFIC
  {
    flag: <HongKongFlag />,
    country: 'Hong Kong',
    region: 'ASIA PACIFIC',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'HKD 10,000',
    accountingReq: 'Yes',
    taxation: '16.5%',
    legalSystem: 'Common',
    timeToForm: '1 day',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'asia-pacific',
    slug: 'hong-kong'
  },
  {
    flag: <MalaysiaFlag />,
    country: 'Labuan, Malaysia',
    region: 'ASIA PACIFIC',
    companyOfficersPublic: 'No',
    paidUpCapital: 'USD 1',
    standardShareCapital: 'USD 10,000',
    accountingReq: 'Yes',
    taxation: '3%',
    legalSystem: 'Common',
    timeToForm: '2 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'asia-pacific',
    slug: 'malaysia'
  },
  {
    flag: <SingaporeFlag />,
    country: 'Singapore',
    region: 'ASIA PACIFIC',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'SGD 1',
    standardShareCapital: 'SGD 1',
    accountingReq: 'Yes',
    taxation: '17%',
    legalSystem: 'Common',
    timeToForm: '1 day',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'asia-pacific',
    slug: 'singapore'
  },
  {
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    region: 'MIDDLE EAST',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'Varies by zone',
    standardShareCapital: 'Varies by zone',
    accountingReq: 'Yes',
    taxation: '0-9%',
    legalSystem: 'Civil',
    timeToForm: '7-14 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'middle-east',
    slug: 'uae'
  },
  {
    flag: <VietnamFlag />,
    country: 'Vietnam',
    region: 'ASIA PACIFIC',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'Varies',
    standardShareCapital: 'Varies',
    accountingReq: 'Yes',
    taxation: '20%',
    legalSystem: 'Civil',
    timeToForm: '10 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'asia-pacific',
    slug: 'vietnam'
  },
  // EUROPE
  {
    flag: '🇨🇾',
    country: 'Cyprus',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'EUR 1',
    standardShareCapital: 'EUR 1,000',
    accountingReq: 'Yes',
    taxation: '12.5%',
    legalSystem: 'Common',
    timeToForm: '14 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'cyprus'
  },
  {
    flag: '🇬🇮',
    country: 'Gibraltar',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'GBP 100',
    accountingReq: 'Yes',
    taxation: '10%',
    legalSystem: 'Common',
    timeToForm: '8 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'gibraltar'
  },
  {
    flag: '🇱🇮',
    country: 'Liechtenstein',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'CHF 30,000',
    standardShareCapital: 'CHF 50,000',
    accountingReq: 'Yes',
    taxation: '12.5%',
    legalSystem: 'Civil',
    timeToForm: '7 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'liechtenstein'
  },
  {
    flag: '🇱🇺',
    country: 'Luxembourg',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'EUR 12,000',
    standardShareCapital: 'EUR 12,000',
    accountingReq: 'Yes',
    taxation: '24.94%',
    legalSystem: 'Civil',
    timeToForm: '10 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'luxembourg'
  },
  {
    flag: '🇲🇹',
    country: 'Malta',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'EUR 1,165',
    standardShareCapital: 'EUR 1,165',
    accountingReq: 'Yes',
    taxation: '35%',
    legalSystem: 'Mix',
    timeToForm: '5 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'malta'
  },
  {
    flag: '🇳🇱',
    country: 'Netherlands',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'EUR 1',
    standardShareCapital: 'EUR 1',
    accountingReq: 'Yes',
    taxation: '25.8%',
    legalSystem: 'Civil',
    timeToForm: '5 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'netherlands'
  },
  {
    flag: '🇨🇭',
    country: 'Switzerland',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'CHF 50,000',
    standardShareCapital: 'CHF 100,000',
    accountingReq: 'Yes',
    taxation: '8.5%',
    legalSystem: 'Civil',
    timeToForm: '12 days',
    minShareholders: '1/3',
    bearerShares: 'No',
    type: 'europe',
    slug: 'switzerland'
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    region: 'EUROPE',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'GBP 1',
    standardShareCapital: 'GBP 1',
    accountingReq: 'Yes',
    taxation: '25%',
    legalSystem: 'Common',
    timeToForm: '2 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'europe',
    slug: 'uk'
  },
  // CARIBBEAN / AMERICAS
  {
    flag: '🇦🇮',
    country: 'Anguilla',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 1,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '6 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'anguilla'
  },
  {
    flag: '🇧🇸',
    country: 'Bahamas',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 5,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '9 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'bahamas'
  },
  {
    flag: '🇧🇿',
    country: 'Belize',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 50,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '2 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'belize'
  },
  {
    flag: '🇻🇬',
    country: 'British Virgin Islands',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 50,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '6 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'caribbean',
    slug: 'bvi'
  },
  {
    flag: '🇰🇾',
    country: 'Cayman Islands',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 50,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '6 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'caribbean',
    slug: 'cayman'
  },
  {
    flag: '🇵🇦',
    country: 'Panama',
    region: 'AMERICA',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 10,000',
    accountingReq: 'Yes',
    taxation: '0%',
    legalSystem: 'Civil',
    timeToForm: '5 days',
    minShareholders: '3/3',
    bearerShares: 'No',
    type: 'america',
    slug: 'panama'
  },
  {
    flag: '🇰🇳',
    country: 'Saint Kitts and Nevis',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 100',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '4 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'st-kitts'
  },
  {
    flag: '🇱🇨',
    country: 'Saint Lucia',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 1,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Mix',
    timeToForm: '6 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'st-lucia'
  },
  {
    flag: '🇻🇨',
    country: 'Saint Vincent & Grenadines',
    region: 'CARIBBEAN',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 100',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '5 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'caribbean',
    slug: 'svg'
  },
  // OCEANIA
  {
    flag: <MarshallIslandsFlag />,
    country: 'Marshall Islands',
    region: 'OCEANIA',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 1,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '6 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'asia-pacific',
    slug: 'marshall'
  },
  {
    flag: <SamoaFlag />,
    country: 'Samoa',
    region: 'OCEANIA',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'No requirement',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Common',
    timeToForm: '2 days',
    minShareholders: '1/1',
    bearerShares: 'No',
    type: 'asia-pacific',
    slug: 'samoa'
  },
  {
    flag: '🇸🇨',
    country: 'Seychelles',
    region: 'OCEANIA',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 1,000',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Civil',
    timeToForm: '2 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'asia-pacific',
    slug: 'seychelles'
  },
  {
    flag: <VanuatuFlag />,
    country: 'Vanuatu',
    region: 'OCEANIA',
    companyOfficersPublic: 'No',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'No requirement',
    accountingReq: 'No',
    taxation: '0%',
    legalSystem: 'Mix',
    timeToForm: '5 days',
    minShareholders: '1/1',
    bearerShares: 'Yes',
    type: 'asia-pacific',
    slug: 'vanuatu'
  },
  // AFRICA
  {
    flag: '🇲🇺',
    country: 'Mauritius',
    region: 'AFRICA',
    companyOfficersPublic: 'Yes',
    paidUpCapital: 'No requirement',
    standardShareCapital: 'USD 1',
    accountingReq: 'Yes',
    taxation: '15%',
    legalSystem: 'Mix',
    timeToForm: '5 days',
    minShareholders: '1/2',
    bearerShares: 'No',
    type: 'africa',
    slug: 'mauritius'
  }
];

type SortField = 'country' | 'timeToForm' | 'taxation' | 'legalSystem';

const testimonials = [
  {
    name: 'Mark T.',
    location: 'Singapore',
    content: 'OCC handled our offshore incorporation flawlessly. We opened a BVI company and corporate bank account within weeks.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgxMjA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Laura D.',
    location: 'UK',
    content: 'Professional, responsive and extremely knowledgeable about asset protection.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MTM2MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Daniel R.',
    location: 'Australia',
    content: 'The team guided us through every step of our company setup and compliance process. Everything was delivered on time and with absolute clarity.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjgyMTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Sofia M.',
    location: 'Germany',
    content: 'From consultation to banking support, the experience was seamless. Their client portal makes managing our entities extremely easy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553484771-4e29a68540f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzY4MjE2ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function JurisdictionsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'asia-pacific' | 'europe' | 'caribbean' | 'middle-east' | 'africa' | 'america'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('country');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Filters
  const [filterTaxation, setFilterTaxation] = useState<string>('all');
  const [filterLegalSystem, setFilterLegalSystem] = useState<string>('all');
  const [filterTimeToForm, setFilterTimeToForm] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sort function
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filter and search jurisdictions
  let filteredJurisdictions = activeTab === 'all' ? jurisdictions : jurisdictions.filter(j => j.type === activeTab);
  
  // Apply search
  if (searchQuery) {
    filteredJurisdictions = filteredJurisdictions.filter(j => 
      j.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.region.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply filters
  if (filterLegalSystem !== 'all') {
    filteredJurisdictions = filteredJurisdictions.filter(j => j.legalSystem.includes(filterLegalSystem));
  }
  if (filterTaxation !== 'all') {
    if (filterTaxation === '0') {
      filteredJurisdictions = filteredJurisdictions.filter(j => j.taxation === '0%');
    } else if (filterTaxation === '10') {
      filteredJurisdictions = filteredJurisdictions.filter(j => {
        const rate = parseFloat(j.taxation);
        return rate > 0 && rate <= 10;
      });
    } else if (filterTaxation === '15') {
      filteredJurisdictions = filteredJurisdictions.filter(j => {
        const rate = parseFloat(j.taxation);
        return rate > 0 && rate <= 15;
      });
    }
  }
  if (filterTimeToForm !== 'all') {
    filteredJurisdictions = filteredJurisdictions.filter(j => {
      const time = parseInt(j.timeToForm) || 999;
      return time <= parseInt(filterTimeToForm);
    });
  }

  // Apply sorting
  const sortedJurisdictions = [...filteredJurisdictions].sort((a, b) => {
    let compareResult = 0;
    
    if (sortField === 'country') {
      compareResult = a.country.localeCompare(b.country);
    } else if (sortField === 'timeToForm') {
      const aTime = parseInt(a.timeToForm) || 999;
      const bTime = parseInt(b.timeToForm) || 999;
      compareResult = aTime - bTime;
    } else if (sortField === 'taxation') {
      const aTax = parseFloat(a.taxation) || 0;
      const bTax = parseFloat(b.taxation) || 0;
      compareResult = aTax - bTax;
    } else if (sortField === 'legalSystem') {
      compareResult = a.legalSystem.localeCompare(b.legalSystem);
    }
    
    return sortDirection === 'asc' ? compareResult : -compareResult;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[200px] lg:h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bannerImage}
            alt="Global Network" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-2xl leading-tight mb-3 lg:mb-6">
              Choose the <span className="text-[#C91F26]">Right Jurisdiction</span> for Your Business
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
              Compare 27+ jurisdictions side-by-side
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="sticky top-[60px] lg:top-[72px] z-40 bg-white shadow-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex lg:flex-wrap gap-3 lg:justify-center overflow-x-auto scrollbar-hide pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              All Regions
            </button>
            <button
              onClick={() => setActiveTab('asia-pacific')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'asia-pacific'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Asia Pacific
            </button>
            <button
              onClick={() => setActiveTab('europe')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'europe'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Europe
            </button>
            <button
              onClick={() => setActiveTab('caribbean')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'caribbean'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Caribbean
            </button>
            <button
              onClick={() => setActiveTab('middle-east')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'middle-east'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Middle East
            </button>
            <button
              onClick={() => setActiveTab('africa')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'africa'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Africa
            </button>
            <button
              onClick={() => setActiveTab('america')}
              className={`px-6 py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 ${
                activeTab === 'america'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              America
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          {/* Search and Filter Button Row */}
          <div className="flex items-center gap-2">
            {/* Search Bar - Full width on mobile */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:border-[#C91F26] focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Single Filter Button on Mobile, Individual Filters on Desktop */}
            <div className="lg:hidden relative shrink-0">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-1 px-3 py-2.5 border border-gray-300 rounded-xl bg-white hover:border-gray-400 transition-colors"
              >
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-medium text-gray-700">Filter</span>
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Desktop Filters - Horizontal */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative shrink-0">
                <Filter className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
                <select
                  value={filterTaxation}
                  onChange={(e) => setFilterTaxation(e.target.value)}
                  className="pl-8 pr-7 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-xs cursor-pointer bg-white hover:border-gray-400 transition-colors w-20"
                >
                  <option value="all">Tax</option>
                  <option value="0">0%</option>
                  <option value="10">≤10%</option>
                  <option value="15">≤15%</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
              </div>

              <div className="relative shrink-0">
                <select
                  value={filterLegalSystem}
                  onChange={(e) => setFilterLegalSystem(e.target.value)}
                  className="pl-3 pr-7 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-xs cursor-pointer bg-white hover:border-gray-400 transition-colors w-24"
                >
                  <option value="all">Legal</option>
                  <option value="Common">Common</option>
                  <option value="Civil">Civil</option>
                  <option value="Mix">Mix</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
              </div>

              <div className="relative shrink-0">
                <select
                  value={filterTimeToForm}
                  onChange={(e) => setFilterTimeToForm(e.target.value)}
                  className="pl-3 pr-7 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-xs cursor-pointer bg-white hover:border-gray-400 transition-colors w-20"
                >
                  <option value="all">Days</option>
                  <option value="1">≤1</option>
                  <option value="5">≤5</option>
                  <option value="10">≤10</option>
                  <option value="14">≤14</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
              </div>

              {/* Clear Filters Button */}
              {(searchQuery || filterTaxation !== 'all' || filterLegalSystem !== 'all' || filterTimeToForm !== 'all') && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setFilterTaxation('all');
                    setFilterLegalSystem('all');
                    setFilterTimeToForm('all');
                  }}
                  className="flex items-center gap-1 px-3 py-2.5 text-xs font-medium text-[#C91F26] hover:bg-red-50 rounded-xl transition-colors border border-[#C91F26]/30 hover:border-[#C91F26] shrink-0"
                >
                  <X className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Mobile Collapsible Filters */}
          {isFilterOpen && (
            <div className="lg:hidden mt-3 space-y-2 pb-2">
              <div className="relative">
                <select
                  value={filterTaxation}
                  onChange={(e) => setFilterTaxation(e.target.value)}
                  className="w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-sm cursor-pointer bg-white"
                >
                  <option value="all">Taxation: All</option>
                  <option value="0">Taxation: 0%</option>
                  <option value="10">Taxation: ≤10%</option>
                  <option value="15">Taxation: ≤15%</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filterLegalSystem}
                  onChange={(e) => setFilterLegalSystem(e.target.value)}
                  className="w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-sm cursor-pointer bg-white"
                >
                  <option value="all">Legal System: All</option>
                  <option value="Common">Legal System: Common</option>
                  <option value="Civil">Legal System: Civil</option>
                  <option value="Mix">Legal System: Mix</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filterTimeToForm}
                  onChange={(e) => setFilterTimeToForm(e.target.value)}
                  className="w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-xl appearance-none focus:border-[#C91F26] focus:outline-none text-sm cursor-pointer bg-white"
                >
                  <option value="all">Formation Time: All</option>
                  <option value="1">Formation Time: ≤1 day</option>
                  <option value="5">Formation Time: ≤5 days</option>
                  <option value="10">Formation Time: ≤10 days</option>
                  <option value="14">Formation Time: ≤14 days</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Clear Filters Button */}
              {(filterTaxation !== 'all' || filterLegalSystem !== 'all' || filterTimeToForm !== 'all') && (
                <button 
                  onClick={() => {
                    setFilterTaxation('all');
                    setFilterLegalSystem('all');
                    setFilterTimeToForm('all');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#C91F26] hover:bg-red-50 rounded-xl transition-colors border border-[#C91F26]/30 hover:border-[#C91F26]"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-[1400px]">
                <thead className="sticky top-0 z-20">
                  <tr className="bg-gradient-to-r from-[#C91F26] via-[#8b151a] to-[#C91F26]">
                    <th className="px-6 py-5 text-left w-[180px] sticky left-0 z-20 bg-gradient-to-r from-[#C91F26] to-[#8b151a]">
                      <span className="text-sm font-bold text-white">Company Officers in Public Register</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Paid Up Capital Requirement</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Standard Share Capital</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Accounting Requirement</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[130px]">
                      <span className="text-xs font-bold text-white">Jurisdiction Taxation (on profits)</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Watch Video</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Basis of legal System</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[110px]">
                      <span className="text-xs font-bold text-white">Time to form (working day)</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[130px]">
                      <span className="text-xs font-bold text-white">Minimum Shareholders/ Directors</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Bearer Shares Permitted</span>
                    </th>
                    <th className="px-4 py-5 text-center w-[120px]">
                      <span className="text-xs font-bold text-white">Documents Required</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {sortedJurisdictions.map((jurisdiction, index) => (
                    <tr 
                      key={`${jurisdiction.country}-${index}`}
                      onClick={() => {
                        if (jurisdiction.slug) {
                          window.location.href = `/jurisdiction/${jurisdiction.slug}`;
                        }
                      }}
                      className={`group transition-all duration-300 ${
                        jurisdiction.slug 
                          ? 'hover:bg-gradient-to-r hover:from-red-50/50 hover:via-blue-50/30 hover:to-transparent cursor-pointer hover:shadow-lg hover:shadow-red-100/50 hover:scale-[1.01] hover:border-l-4 hover:border-l-[#C91F26]' 
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ 
                        transformOrigin: 'center',
                        position: 'relative'
                      }}
                    >
                      <td className="px-6 py-4 sticky left-0 bg-white z-10 border-r border-gray-200 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-50/50 group-hover:via-blue-50/30 group-hover:to-transparent">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                            {jurisdiction.flag}
                          </div>
                          <div className={`font-bold text-sm transition-all duration-300 ${
                            jurisdiction.slug 
                              ? 'text-gray-900 group-hover:text-[#C91F26] group-hover:translate-x-1' 
                              : 'text-gray-900'
                          }`}>
                            {jurisdiction.country}
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900 break-words">{jurisdiction.paidUpCapital}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900 break-words">{jurisdiction.standardShareCapital}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900">{jurisdiction.accountingReq}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900">{jurisdiction.taxation}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <div className="flex justify-center">
                          <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors group">
                            <Play className="w-4 h-4 text-white fill-white" />
                          </button>
                        </div>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900 break-words">{jurisdiction.legalSystem}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900 break-words">{jurisdiction.timeToForm}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900 break-words">{jurisdiction.minShareholders}</span>
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        {jurisdiction.bearerShares === 'Yes' ? (
                          <Check className="w-5 h-5 text-gray-900 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-900 mx-auto" />
                        )}
                      </td>
                      
                      <td className="px-4 py-4 text-center align-middle">
                        <span className="text-sm text-gray-900">Attached File</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {sortedJurisdictions.length === 0 && (
              <div className="text-center py-16 px-4">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No jurisdictions found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setFilterTaxation('all');
                    setFilterLegalSystem('all');
                    setFilterTimeToForm('all');
                    setActiveTab('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#C91F26] to-[#8b151a] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[30px] lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-[#2C2C2C]">
              Why Choose <span className="text-[#C91F26]">Us</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg group" style={{ backgroundImage: "linear-gradient(152.996deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
              <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-xl" />
              <div className="bg-[#C91F26] flex items-center justify-center rounded-xl w-14 h-14 mb-5 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#2C2C2C] mb-3 leading-7">Clear and Practical Guidance</h3>
              <p className="text-[#6C757D] leading-6">
                Information and support designed for business owners, without unnecessary legal complexity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg group" style={{ backgroundImage: "linear-gradient(152.996deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
              <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-xl" />
              <div className="bg-[#C91F26] flex items-center justify-center rounded-xl w-14 h-14 mb-5 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#2C2C2C] mb-3 leading-7">Experience Across Jurisdictions</h3>
              <p className="text-[#6C757D] leading-6">
                Hands-on experience supporting company formation and compliance in multiple countries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg group" style={{ backgroundImage: "linear-gradient(152.996deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
              <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-xl" />
              <div className="bg-[#C91F26] flex items-center justify-center rounded-xl w-14 h-14 mb-5 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#2C2C2C] mb-3 leading-7">Support Beyond Incorporation</h3>
              <p className="text-[#6C757D] leading-6">
                Ongoing assistance with banking, accounting, licensing, and operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C91F26]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-12 relative">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-[#2C2C2C]">
              Trusted by <span className="text-[#C91F26]">Global Entrepreneurs</span>
            </h2>
          </div>
        </div>

        {/* First Row - Scrolling Left (Hidden on Mobile) */}
        <div className="relative mb-6 lg:mb-10 hidden lg:block">
          <div className="flex gap-10 animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`row1-${index}`}
                className="bg-white flex flex-col gap-5 pt-8 pr-8 pb-8 pl-8 rounded-[20px] w-[500px] h-[280px] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300 shrink-0"
              >
                <div className="flex gap-5 items-center">
                  <div className="overflow-hidden rounded-full shrink-0 w-[70px] h-[70px]">
                    <ImageWithFallback 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-[#0f1e4c] mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6c757d]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-[#444] leading-7 flex-1">
                  {testimonial.content}
                </p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right (Hidden on Mobile) */}
        <div className="relative hidden lg:block">
          <div className="flex gap-10 animate-scroll-right">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`row2-${index}`}
                className="bg-white flex flex-col gap-5 pt-8 pr-8 pb-8 pl-8 rounded-[20px] w-[500px] h-[280px] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300 shrink-0"
              >
                <div className="flex gap-5 items-center">
                  <div className="overflow-hidden rounded-full shrink-0 w-[70px] h-[70px]">
                    <ImageWithFallback 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-[#0f1e4c] mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6c757d]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-[#444] leading-7 flex-1">
                  {testimonial.content}
                </p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Static Grid */}
        <div className="lg:hidden grid grid-cols-1 gap-4 px-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={`mobile-${index}`}
              className="bg-white flex flex-col gap-4 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex gap-4 items-center">
                <div className="overflow-hidden rounded-full shrink-0 w-12 h-12">
                  <ImageWithFallback 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0f1e4c]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#6c757d]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <p className="text-[#444] text-sm leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={14} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] relative overflow-hidden">
        {/* Cityscape Overlay Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${ctaOverlay})` }}
        ></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white transform rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Headline */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6">
              Need Help Choosing a Jurisdiction?
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-10">
              Our Experts can help you evaluate options and guide you through the setup process.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-[#C91F26] px-8 py-3 lg:px-12 lg:py-5 rounded-[12px] hover:bg-gray-100 transition-all duration-300 font-semibold text-sm lg:text-lg inline-flex items-center gap-4 hover:gap-5 group shadow-lg relative overflow-hidden border border-white/50">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">CONTACT US</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Frequently Asked <span className="text-[#C91F26]">Questions</span>
            </h2>
          </div>

          {/* Single Column Layout */}
          <div className="space-y-4">
            {[
              {
                question: "How to set up an offshore company?",
                answer: "Setting up an offshore company involves selecting the right jurisdiction, preparing required documentation, registering with local authorities, and ensuring compliance with regulations. Our experts guide you through each step to ensure a smooth incorporation process."
              },
              {
                question: "What is the difference between a holding company and an investment company?",
                answer: "A holding company primarily owns shares in other companies and manages those investments, while an investment company actively invests in securities, real estate, or other assets for profit. The structure you choose depends on your business objectives and tax planning strategy."
              },
              {
                question: "What is a corporate service provider?",
                answer: "A corporate service provider (CSP) offers professional services to help businesses with company formation, regulatory compliance, accounting, tax planning, and ongoing corporate administration. CSPs ensure your company meets all legal requirements in your chosen jurisdiction."
              },
              {
                question: "What are the 4 key steps in developing a business plan?",
                answer: "The four key steps are: 1) Define your business goals and objectives, 2) Conduct market research and competitive analysis, 3) Develop financial projections and budgets, 4) Create an operational plan with clear milestones. A solid business plan is essential for offshore company success."
              },
              {
                question: "Why do you need to hire a corporate service provider for your business?",
                answer: "A corporate service provider ensures compliance with local regulations, handles complex paperwork, provides local expertise, maintains corporate records, and helps navigate tax obligations. This allows you to focus on growing your business while experts handle the administrative complexities."
              },
              {
                question: "When do you need to engage a corporate service provider?",
                answer: "You should engage a corporate service provider during the initial company formation process and maintain the relationship for ongoing compliance. It's especially important when expanding internationally, dealing with complex tax structures, or ensuring regulatory compliance in multiple jurisdictions."
              },
              {
                question: "How does a corporate services provider help you?",
                answer: "Corporate service providers assist with company registration, nominee services, registered office provision, compliance management, accounting and bookkeeping, tax filing, annual renewals, and strategic business consulting. They act as your local partner in foreign jurisdictions."
              },
              {
                question: "Why is business consulting important?",
                answer: "Business consulting provides expert insights into market opportunities, operational efficiency, risk management, and growth strategies. For offshore companies, consulting is crucial for understanding complex regulations, optimizing tax structures, and making informed decisions about jurisdiction selection."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQItem Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#2C2C2C] pr-4 group-hover:text-[#C91F26] transition-colors">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#C91F26] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}