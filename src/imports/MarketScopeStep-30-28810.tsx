import svgPaths from "./svg-gtr06sdyse";

function Flags1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Flags({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function JurisHori({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#0d0d0d] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default function MarketScopeStep() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="MarketScopeStep">
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <JurisHori>
          <Flags>
            <div className="absolute inset-[12.82%_0]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17.8475">
                <path d={svgPaths.pf335800} fill="var(--fill-0, #EE1C25)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[29.6%_45.2%_50.1%_43.23%]" data-name="a">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.77771 4.872">
                <g id="a">
                  <path d={svgPaths.p26727500} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p3926b8c0} fill="var(--fill-0, #EE1C25)" id="Vector_2" />
                </g>
              </svg>
            </div>
            <div className="absolute contents inset-[38.01%_30.07%_32.39%_34.7%]" data-name="b">
              <div className="absolute bottom-[50.43%] left-1/2 right-[30.07%] top-[38.01%]" data-name="a">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.784 2.7728">
                  <g id="a">
                    <path d={svgPaths.p1d701480} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p3d51af00} fill="var(--fill-0, #EE1C25)" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[50.4%_48.15%_32.39%_34.7%]" data-name="a">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.11521 4.12927">
                  <g id="a">
                    <path d={svgPaths.p10af6980} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p27d2d6c0} fill="var(--fill-0, #EE1C25)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute contents inset-[42.47%_37%_32.93%_31.92%]" data-name="b">
              <div className="absolute inset-[48.77%_37%_32.93%_50.43%]" data-name="a">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01645 4.39034">
                  <g id="a">
                    <path d={svgPaths.p2f649f00} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p21b4be00} fill="var(--fill-0, #EE1C25)" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[42.47%_50.33%_44.26%_31.92%]" data-name="a">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25871 3.18535">
                  <g id="a">
                    <path d={svgPaths.pf20ff00} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p2524f480} fill="var(--fill-0, #EE1C25)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </Flags>
          <Text text="Hong Kong" />
        </JurisHori>
        <JurisHori>
          <Flags>
            <div className="absolute inset-[0_-25%_-25%_0]" data-name="79. Malaysia-79 1">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <g id="79. Malaysia-79 1">
                  <path d={svgPaths.p8cb3b00} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p3dbacd80} fill="var(--fill-0, #CC0000)" id="Vector_2" />
                  <path d={svgPaths.p26e2400} fill="var(--fill-0, #000066)" id="Vector_3" />
                  <path d={svgPaths.p1d18f380} fill="var(--fill-0, #CC0000)" id="Vector_4" />
                  <path d={svgPaths.p31568180} fill="var(--fill-0, #FFCC00)" id="Vector_5" />
                </g>
              </svg>
            </div>
          </Flags>
          <Text text="Labuan, Malaysia" />
        </JurisHori>
        <JurisHori>
          <Flags1>
            <g clipPath="url(#clip0_27_8397)" id="Flags">
              <path d={svgPaths.p3e719480} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p18e7ef80} fill="var(--fill-0, #003893)" id="Vector_2" />
              <path d={svgPaths.p3e3f5d80} fill="var(--fill-0, #003893)" id="Vector_3" />
              <path d={svgPaths.p3d78eb10} fill="var(--fill-0, #DD7500)" id="Vector_4" />
              <path d={svgPaths.pb92ba80} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
            <defs>
              <clipPath id="clip0_27_8397">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </Flags1>
          <Text text="Marshall Islands" />
        </JurisHori>
        <JurisHori>
          <Flags1>
            <g clipPath="url(#clip0_30_28834)" id="Flags">
              <path d={svgPaths.p13cbcb80} fill="var(--fill-0, #CE1126)" id="Vector" />
              <path d={svgPaths.p14ae9700} fill="var(--fill-0, #002B7F)" id="Vector_2" />
              <g id="Group">
                <path d={svgPaths.p209a7400} fill="var(--fill-0, white)" id="a" />
                <path d={svgPaths.p23950d00} fill="var(--fill-0, white)" id="b" />
                <path d={svgPaths.p174c7900} fill="var(--fill-0, white)" id="b_2" />
                <path d={svgPaths.pc3d5e00} fill="var(--fill-0, white)" id="b_3" />
                <path d={svgPaths.pe72f7f0} fill="var(--fill-0, white)" id="a_2" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_30_28834">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </Flags1>
          <Text text="Samoa" />
        </JurisHori>
        <JurisHori>
          <Flags1>
            <g clipPath="url(#clip0_27_8430)" id="Flags">
              <path d={svgPaths.p13cbcb80} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p22655500} fill="var(--fill-0, #ED2939)" id="Vector_2" />
              <path d={svgPaths.p297aca80} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p26c9a80} fill="var(--fill-0, #ED2939)" id="Vector_4" />
              <path d={svgPaths.p239aee00} fill="var(--fill-0, white)" id="s" />
              <g id="t">
                <path d={svgPaths.p35aae780} fill="var(--fill-0, white)" id="s_2" />
                <path d={svgPaths.p36f3b00} fill="var(--fill-0, white)" id="s_3" />
              </g>
              <g id="t_2">
                <path d={svgPaths.p2abeb200} fill="var(--fill-0, white)" id="s_4" />
                <path d={svgPaths.p3c790100} fill="var(--fill-0, white)" id="s_5" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_27_8430">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </Flags1>
          <Text text="Singapore" />
        </JurisHori>
        <JurisHori>
          <Flags1>
            <g clipPath="url(#clip0_30_28815)" id="Flags">
              <path d={svgPaths.p22655500} fill="var(--fill-0, #D21034)" id="Vector" />
              <path d={svgPaths.p361ad7f0} fill="var(--fill-0, #009543)" id="Vector_2" />
              <path d={svgPaths.p67a2380} fill="var(--fill-0, black)" id="Vector_3" />
              <path d={svgPaths.pa0a81c0} fill="var(--fill-0, black)" id="Vector_4" />
              <path d={svgPaths.ped9e400} fill="var(--fill-0, #FDCE12)" id="Vector_5" />
              <path d={svgPaths.p25fb1eb0} fill="var(--fill-0, #FDCE12)" id="Vector_6" />
              <path d={svgPaths.p35cc3780} fill="var(--fill-0, black)" id="Vector_7" />
              <path d={svgPaths.p2bf70c00} fill="var(--fill-0, #FDCE12)" id="Vector_8" />
              <g id="frond">
                <path d={svgPaths.p1f84c700} fill="var(--fill-0, #FDCE12)" id="Vector_9" stroke="var(--stroke-0, #FDCE12)" strokeMiterlimit="2.53" strokeWidth="0.04" />
                <path d={svgPaths.p3d5f26f0} fill="var(--fill-0, #FDCE12)" id="Vector_10" />
              </g>
              <g id="frond_2">
                <path d={svgPaths.p238f0280} fill="var(--fill-0, #FDCE12)" id="Vector_11" stroke="var(--stroke-0, #FDCE12)" strokeMiterlimit="2.53" strokeWidth="0.04" />
                <path d={svgPaths.p2de7f372} fill="var(--fill-0, #FDCE12)" id="Vector_12" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_30_28815">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </Flags1>
          <Text text="Vanuatu" />
        </JurisHori>
        <JurisHori>
          <Flags1>
            <g clipPath="url(#clip0_27_8450)" id="Flags">
              <path d={svgPaths.p13cbcb80} fill="var(--fill-0, #DA251D)" id="Vector" />
              <path d={svgPaths.p37945540} fill="var(--fill-0, #FFFF00)" id="Vector_2" />
            </g>
            <defs>
              <clipPath id="clip0_27_8450">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </Flags1>
          <Text text="Vietnam" />
        </JurisHori>
        <div className="absolute bg-[#f4f6f9] h-[296px] right-[12px] rounded-[100px] top-[16px] w-[4px]" data-name="Scrollbar — Custom">
          <div className="absolute bg-[#dee2e6] h-[82px] left-0 rounded-[100px] top-0 w-[4px]" data-name="Bar" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[3px_4px_4.8px_0px_rgba(212,212,212,0.25)]" />
    </div>
  );
}