// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, BadgeHelp, BarChart3, CircleHelp, Download, Ellipsis, FilePenLine, Inbox, Lightbulb, ListFilter, ListTodo, Pencil, Plus, Settings, TrendingUp } from "lucide-react";


export type InsightsNotePinActionId = "new-note-1" | "export-summary-2" | "filter-list-3" | "review-drafts-4" | "more-horiz-5" | "view-all-activity-6" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface InsightsNotePinProps {
  actions?: Partial<Record<InsightsNotePinActionId, () => void>>;

}

export function InsightsNotePin({ actions }: InsightsNotePinProps) {
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-lg px-md bg-surface-container-lowest docked left-0 w-[320px] border-r border-outline-variant flat no shadows shrink-0 z-10 relative">
      {/* Header */}
      <div className="flex items-center gap-sm mb-xl px-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <FilePenLine className="text-on-primary-container text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight leading-tight">Note Pin</h1>
      <p className="font-label-sm text-label-sm text-secondary font-normal">Minimalist Utility</p>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full bg-primary hover:bg-on-primary-fixed-variant transition-colors text-on-primary font-label-md text-label-md rounded-lg py-[8px] px-md flex items-center justify-center gap-sm mb-xl active:scale-[0.98] shadow-[0_1px_2px_rgba(0,0,0,0.05)]" type="button" data-action-id="new-note-1" onClick={actions?.["new-note-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Note
              </button>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-xs">
      {/* Inactive: Records */}
      <a className="flex items-center gap-md px-md py-[10px] text-secondary hover:bg-surface-container-high transition-colors active:scale-[0.98] rounded-lg font-label-md text-label-md" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <ListTodo className="text-[20px]" aria-hidden={true} focusable="false" />
                      Records
                  </a>
      {/* Inactive: Editor */}
      <a className="flex items-center gap-md px-md py-[10px] text-secondary hover:bg-surface-container-high transition-colors active:scale-[0.98] rounded-lg font-label-md text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      {/* Active: Insights (Conflict Resolution: Execute exact style_active_navigation) */}
      <a className="flex items-center gap-md px-md py-[10px] bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:bg-surface-container transition-colors active:scale-[0.98] font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[20px] icon-fill" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* Footer Links */}
      <div className="flex flex-col gap-xs mt-auto pt-lg border-t border-surface-variant">
      <a className="flex items-center gap-md px-md py-[10px] text-secondary hover:bg-surface-container-high transition-colors active:scale-[0.98] rounded-lg font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-md px-md py-[10px] text-secondary hover:bg-surface-container-high transition-colors active:scale-[0.98] rounded-lg font-label-md text-label-md" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      {/* User Profile Mini */}
      <div className="flex items-center gap-md px-sm py-sm mt-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
      <img alt="User Profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A tightly cropped, high-contrast black and white portrait of a professional individual looking subtly away from the camera, bathed in soft studio lighting against a pure white background, embodying a clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcK0MwPZQSMsHAdUMcTi-3h0CUzs9iUh0BE7vLn8ZpgfWikNf3av-xu9vLlDsAs4xNKOaHo31EYcOKdeyRDAHgqpuSAACcj-BLY5SdmKlQjjKxBVs1O8SwjyeH9cnD9y1hGZ1tN2japDO8p2HAbJWBp7zl4FI9dmObRBoB8ofbqulMzNXGuPa3KaJ6iJeF9fixmAu704qXAXcfnKeCGE9rSntrax5nEBrEp_dvcmfazJEDLcV4tSwNWnfexdTguof0hPp7ijWwjFk" />
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Alex Mercer</span>
      <span className="font-label-sm text-label-sm text-secondary font-normal">Pro Plan</span>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto w-full relative bg-background">
      <div className="max-w-[1200px] mx-auto p-margin-mobile md:p-margin-desktop min-h-full flex flex-col">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
      <div>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">Insights</h2>
      <p className="font-body-sm text-body-sm text-secondary mt-xs">A utilitarian overview of your note structure and recent activity.</p>
      </div>
      <div className="flex items-center gap-sm self-start md:self-auto">
      {/* Action: Export Summary (Secondary Button) */}
      <button className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md py-[6px] px-md rounded-lg flex items-center gap-sm h-10" type="button" data-action-id="export-summary-2" onClick={actions?.["export-summary-2"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
                              Export Summary
                          </button>
      {/* Action: Filter Insights (Context Menu Trigger) */}
      <button className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors w-10 h-10 rounded-lg flex items-center justify-center" type="button" aria-label="Filter List" data-action-id="filter-list-3" onClick={actions?.["filter-list-3"]}>
      <ListFilter className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-md flex-1 pb-xl">
      {/* Small Metric 1: Total Volume */}
      <div className="col-span-1 md:col-span-4 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-outline transition-colors group cursor-default">
      <div className="flex items-start justify-between mb-xl">
      <span className="font-label-md text-label-md text-secondary">Active Records</span>
      <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
      <BadgeHelp className="text-secondary group-hover:text-primary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface mb-xs">1,204</div>
      <div className="flex items-center gap-xs text-[#10B981] font-label-sm text-label-sm">
      <TrendingUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>+12 this week</span>
      </div>
      </div>
      </div>
      {/* Small Metric 2: Average Density */}
      <div className="col-span-1 md:col-span-4 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-outline transition-colors group cursor-default">
      <div className="flex items-start justify-between mb-xl">
      <span className="font-label-md text-label-md text-secondary">Avg. Word Count</span>
      <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
      <BadgeHelp className="text-secondary group-hover:text-primary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface mb-xs">342</div>
      <div className="font-body-sm text-body-sm text-secondary">Per note average</div>
      </div>
      </div>
      {/* Actionable Hint (High Priority) */}
      <div className="col-span-1 md:col-span-4 bg-secondary-container border border-outline-variant rounded-xl p-lg flex flex-col relative overflow-hidden group">
      {/* Subtle background decoration */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed opacity-50 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex items-center gap-sm mb-md relative z-10">
      <Lightbulb className="text-on-secondary-container text-[20px] icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-secondary-container font-bold">Suggestion</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface mb-auto relative z-10">You have <strong>8 notes</strong> marked as "Draft" older than 14 days. Consider archiving or finalizing them.</p>
      <button className="mt-lg self-start text-primary font-label-sm text-label-sm hover:text-on-primary-fixed-variant transition-colors flex items-center gap-xs relative z-10" type="button" data-action-id="review-drafts-4" onClick={actions?.["review-drafts-4"]}>
                              Review Drafts
                              <ArrowRight className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Activity Event List (Compact Density) */}
      <div className="col-span-1 md:col-span-7 bg-surface border border-outline-variant rounded-xl p-0 flex flex-col row-span-2 overflow-hidden">
      <div className="p-md border-b border-surface-variant flex items-center justify-between bg-surface-bright">
      <h3 className="font-headline-md text-headline-md text-on-surface text-[16px]">Recent Activity</h3>
      <button className="text-secondary hover:text-on-surface transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-5" onClick={actions?.["more-horiz-5"]}>
      <Ellipsis className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto">
      {/* List Item 1 */}
      <div className="flex items-center gap-md px-md py-sm border-b border-surface-variant hover:bg-surface-container-lowest transition-colors h-[48px]">
      <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0"></div>
      <div className="flex-1 truncate font-body-sm text-body-sm text-on-surface">
                                      Updated <span className="font-medium">Project Apollo Specifications</span>
      </div>
      <div className="text-secondary font-label-sm text-label-sm shrink-0">2m ago</div>
      </div>
      {/* List Item 2 */}
      <div className="flex items-center gap-md px-md py-sm border-b border-surface-variant hover:bg-surface-container-lowest transition-colors h-[48px]">
      <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
      <div className="flex-1 truncate font-body-sm text-body-sm text-on-surface">
                                      Created <span className="font-medium">Weekly Groceries</span>
      </div>
      <div className="text-secondary font-label-sm text-label-sm shrink-0">1h ago</div>
      </div>
      {/* List Item 3 */}
      <div className="flex items-center gap-md px-md py-sm border-b border-surface-variant hover:bg-surface-container-lowest transition-colors h-[48px]">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0"></div>
      <div className="flex-1 truncate font-body-sm text-body-sm text-on-surface">
                                      Tagged <span className="font-medium">Q3 Planning</span> as #Urgent
                                  </div>
      <div className="text-secondary font-label-sm text-label-sm shrink-0">4h ago</div>
      </div>
      {/* List Item 4 */}
      <div className="flex items-center gap-md px-md py-sm border-b border-surface-variant hover:bg-surface-container-lowest transition-colors h-[48px]">
      <div className="w-2 h-2 rounded-full bg-[#94A3B8] shrink-0"></div>
      <div className="flex-1 truncate font-body-sm text-body-sm text-on-surface">
                                      Archived <span className="font-medium">Old Server Logs 2022</span>
      </div>
      <div className="text-secondary font-label-sm text-label-sm shrink-0">Yesterday</div>
      </div>
      {/* List Item 5 */}
      <div className="flex items-center gap-md px-md py-sm hover:bg-surface-container-lowest transition-colors h-[48px]">
      <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
      <div className="flex-1 truncate font-body-sm text-body-sm text-on-surface">
                                      Created <span className="font-medium">Meeting Notes: Design Sync</span>
      </div>
      <div className="text-secondary font-label-sm text-label-sm shrink-0">Yesterday</div>
      </div>
      </div>
      <div className="p-xs bg-surface-container-lowest border-t border-surface-variant text-center">
      <button className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors py-sm w-full" type="button" data-action-id="view-all-activity-6" onClick={actions?.["view-all-activity-6"]}>View All Activity</button>
      </div>
      </div>
      {/* State Distribution (Sparkline/Progress substitute) */}
      <div className="col-span-1 md:col-span-5 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
      <div className="flex items-center justify-between mb-lg">
      <h3 className="font-headline-md text-headline-md text-on-surface text-[16px]">Category Distribution</h3>
      </div>
      <div className="flex flex-col gap-md">
      {/* Progress Item 1 */}
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-xs">
      <span className="text-on-surface">Work</span>
      <span className="text-secondary">65%</span>
      </div>
      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{width: "65%"}}></div>
      </div>
      </div>
      {/* Progress Item 2 */}
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-xs">
      <span className="text-on-surface">Personal</span>
      <span className="text-secondary">25%</span>
      </div>
      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-[#10B981] rounded-full" style={{width: "25%"}}></div>
      </div>
      </div>
      {/* Progress Item 3 */}
      <div>
      <div className="flex justify-between font-label-sm text-label-sm mb-xs">
      <span className="text-on-surface">Research</span>
      <span className="text-secondary">10%</span>
      </div>
      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-[#F59E0B] rounded-full" style={{width: "10%"}}></div>
      </div>
      </div>
      </div>
      </div>
      {/* Empty/Error State Example */}
      <div className="col-span-1 md:col-span-5 bg-surface-container-lowest border border-dashed border-outline rounded-xl p-lg flex flex-col items-center justify-center text-center h-[200px]">
      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-md">
      <Inbox className="text-secondary text-[24px]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-label-md text-label-md text-on-surface mb-xs">No pending tasks</h4>
      <p className="font-body-sm text-body-sm text-secondary max-w-[200px]">Data from actionable checkboxes within your notes will appear here.</p>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
