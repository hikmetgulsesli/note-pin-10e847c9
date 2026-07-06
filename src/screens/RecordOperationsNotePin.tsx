// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BadgeHelp, BarChart3, CircleHelp, EllipsisVertical, FileText, History, ListFilter, ListTodo, LoaderCircle, Pencil, Plus, RefreshCw, RefreshCwOff, Search, Settings, User } from "lucide-react";


export type RecordOperationsNotePinActionId = "create-1" | "new-note-2" | "records-3" | "editor-4" | "insights-5" | "settings-6" | "support-7" | "filter-8" | "sort-9" | "retry-load-10" | "refresh-list-11" | "inline-edit-12" | "edit-13" | "edit-14" | "edit-15" | "edit-16" | "create-new-record-17" | "share-18" | "more-options-19";

export interface RecordOperationsNotePinProps {
  actions?: Partial<Record<RecordOperationsNotePinActionId, () => void>>;

}

export function RecordOperationsNotePin({ actions }: RecordOperationsNotePinProps) {
  return (
    <>
      {/* Mobile TopNavBar (JSON Executed) */}
      <nav className="md:hidden bg-surface flex justify-between items-center w-full px-margin-desktop h-10 max-w-full docked full-width top-0 border-b border-outline-variant z-50 shrink-0">
      <div className="font-headline-md text-headline-md font-bold text-primary">Note Pin</div>
      <div className="flex gap-4">
      <span className="text-primary border-b-2 border-primary pb-1 cursor-pointer active:opacity-80 font-label-md text-label-md">Records</span>
      <span className="text-secondary cursor-pointer active:opacity-80 font-label-md text-label-md hover:bg-surface-container-low transition-colors">Editor</span>
      </div>
      <button className="font-label-md text-label-md text-primary cursor-pointer active:opacity-80 font-bold" type="button" data-action-id="create-1" onClick={actions?.["create-1"]}>Create</button>
      </nav>
      {/* Desktop SideNavBar (JSON Executed) */}
      <aside className="hidden md:flex flex-col h-full py-lg px-md bg-surface-container-lowest docked left-0 w-[320px] border-r border-outline-variant shrink-0 z-40">
      {/* Header */}
      <div className="flex items-center gap-sm mb-lg">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
      <User  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">Note Pin</h1>
      <p className="font-label-sm text-label-sm text-secondary">Minimalist Utility</p>
      </div>
      </div>
      {/* CTA */}
      <button className="mb-lg w-full bg-primary text-on-primary py-[8px] px-[16px] rounded font-label-md text-label-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-primary/90" type="button" data-action-id="new-note-2" onClick={actions?.["new-note-2"]}>
      <Plus className="text-[20px]" aria-hidden={true} focusable="false" />
                  New Note
              </button>
      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-1 flex-1">
      {/* Active Tab */}
      <button className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold font-label-md text-label-md active:scale-[0.98] transition-transform w-full text-left" type="button" data-action-id="records-3" onClick={actions?.["records-3"]}>
      <ListTodo  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Records
                  </button>
      {/* Inactive Tabs */}
      <button className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high rounded-lg font-label-md text-label-md active:scale-[0.98] hover:bg-surface-container transition-colors w-full text-left" type="button" data-action-id="editor-4" onClick={actions?.["editor-4"]}>
      <Pencil aria-hidden={true} focusable="false" />
                      Editor
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high rounded-lg font-label-md text-label-md active:scale-[0.98] hover:bg-surface-container transition-colors w-full text-left" type="button" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
                      Insights
                  </button>
      </nav>
      {/* Footer Tabs */}
      <div className="mt-auto pt-sm border-t border-outline-variant flex flex-col gap-1">
      <button className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high rounded-lg font-label-md text-label-md active:scale-[0.98] hover:bg-surface-container transition-colors w-full text-left" type="button" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-high rounded-lg font-label-md text-label-md active:scale-[0.98] hover:bg-surface-container transition-colors w-full text-left" type="button" data-action-id="support-7" onClick={actions?.["support-7"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
                      Support
                  </button>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-full w-full overflow-hidden relative bg-surface">
      {/* Toolbar & Context Header */}
      <header className="px-md md:px-lg py-lg border-b border-outline-variant bg-surface flex flex-col gap-4 shrink-0">
      <div className="flex items-center justify-between">
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface">Record Operations</h2>
      <div className="flex gap-2">
      <button className="border border-outline-variant bg-surface-container-lowest text-secondary py-[8px] px-[16px] rounded font-label-md text-label-md hover:bg-surface-container-low focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-colors flex items-center gap-2" type="button" data-action-id="filter-8" onClick={actions?.["filter-8"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="hidden sm:inline">Filter</span>
      </button>
      <button className="border border-outline-variant bg-surface-container-lowest text-secondary py-[8px] px-[16px] rounded font-label-md text-label-md hover:bg-surface-container-low focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-colors flex items-center gap-2" type="button" data-action-id="sort-9" onClick={actions?.["sort-9"]}>
      <ArrowUpDown className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="hidden sm:inline">Sort</span>
      </button>
      </div>
      </div>
      {/* Search & Metrics Row */}
      <div className="flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
      {/* Persistent Search */}
      <div className="relative w-full xl:max-w-md group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <input className="w-full h-[40px] pl-10 pr-4 border border-outline-variant rounded bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]" placeholder="Search records, tags, or content..." type="text" />
      </div>
      {/* Summary Metrics (Bento-style compact) */}
      <div className="flex gap-2 shrink-0 pb-1 xl:pb-0 scrollbar-hide overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <div className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 flex flex-col min-w-[120px]">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Total Notes</span>
      <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1">1,248</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 flex flex-col min-w-[120px]">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Recently Edited</span>
      <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1">12</span>
      </div>
      {/* Error State Example in Metrics */}
      <div className="bg-error-container/20 border border-error/30 rounded px-4 py-2 flex flex-col min-w-[120px] justify-center">
      <span className="font-label-sm text-label-sm text-error flex items-center gap-1">
      <RefreshCwOff className="text-[14px]" aria-hidden={true} focusable="false" /> Sync Error
                              </span>
      <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface mt-1 text-left underline decoration-dotted" type="button" data-action-id="retry-load-10" onClick={actions?.["retry-load-10"]}>Retry Load</button>
      </div>
      </div>
      </div>
      </header>
      {/* Workspace Layout (Sidebar-Detail Pattern) */}
      <div className="flex-1 flex overflow-hidden w-full relative">
      {/* Primary List Pane */}
      <div className="w-full md:w-[360px] xl:w-[420px] flex flex-col bg-surface border-r border-outline-variant shrink-0 relative z-10">
      {/* List Sub-header */}
      <div className="px-md py-sm bg-surface-bright border-b border-surface-variant flex justify-between items-center sticky top-0 z-20 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
      <span className="font-label-sm text-label-sm text-secondary font-bold">All Records</span>
      <button  title="Refresh List" type="button" data-action-id="refresh-list-11" onClick={actions?.["refresh-list-11"]} className="text-secondary text-[18px] hover:text-on-surface transition-colors cursor-pointer"><RefreshCw aria-hidden={true} focusable="false" /></button>
      </div>
      {/* List Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto pb-lg">
      {/* Compact List Items (48px height based on guidance) */}
      {/* Active/Selected Item */}
      <div className="h-[48px] px-md border-b border-surface-variant flex items-center gap-3 bg-secondary-container/40 cursor-pointer relative group">
      {/* Selection Indicator Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
      <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" title="Pinned/Active"></div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
      <p className="font-label-md text-label-md text-on-surface truncate">Q3 Financial Projections &amp; Strategy</p>
      </div>
      <span className="font-label-sm text-label-sm text-secondary shrink-0 group-hover:hidden">10:42 AM</span>
      <button  title="Inline Edit" type="button" data-action-id="inline-edit-12" onClick={actions?.["inline-edit-12"]} className="hidden group-hover:flex text-secondary text-[16px] hover:text-primary shrink-0"><Pencil aria-hidden={true} focusable="false" /></button>
      </div>
      {/* Standard Items */}
      <div className="h-[48px] px-md border-b border-surface-variant flex items-center gap-3 hover:bg-[#F1F5F9] cursor-pointer transition-colors group">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" title="Draft"></div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
      <p className="font-body-md text-body-md text-on-surface truncate">Meeting Notes: Project Alpha Kickoff</p>
      </div>
      <span className="font-label-sm text-label-sm text-secondary shrink-0 group-hover:hidden">Yesterday</span>
      <button  type="button" data-action-id="edit-13" onClick={actions?.["edit-13"]} className="hidden group-hover:flex text-secondary text-[16px] hover:text-primary shrink-0" aria-label="Edit"><Pencil aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="h-[48px] px-md border-b border-surface-variant flex items-center gap-3 hover:bg-[#F1F5F9] cursor-pointer transition-colors group">
      <div className="w-2 h-2 rounded-full bg-[#94A3B8] shrink-0" title="Archived"></div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
      <p className="font-body-md text-body-md text-on-surface truncate">Vendor Equipment List v2</p>
      </div>
      <span className="font-label-sm text-label-sm text-secondary shrink-0 group-hover:hidden">Oct 12</span>
      <button  type="button" data-action-id="edit-14" onClick={actions?.["edit-14"]} className="hidden group-hover:flex text-secondary text-[16px] hover:text-primary shrink-0" aria-label="Edit"><Pencil aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="h-[48px] px-md border-b border-surface-variant flex items-center gap-3 hover:bg-[#F1F5F9] cursor-pointer transition-colors group">
      <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" title="Active"></div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
      <p className="font-body-md text-body-md text-on-surface truncate">Design System Typography Audit</p>
      </div>
      <span className="font-label-sm text-label-sm text-secondary shrink-0 group-hover:hidden">Oct 10</span>
      <button  type="button" data-action-id="edit-15" onClick={actions?.["edit-15"]} className="hidden group-hover:flex text-secondary text-[16px] hover:text-primary shrink-0" aria-label="Edit"><Pencil aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="h-[48px] px-md border-b border-surface-variant flex items-center gap-3 hover:bg-[#F1F5F9] cursor-pointer transition-colors group">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" title="Draft"></div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
      <p className="font-body-md text-body-md text-on-surface truncate">Onboarding Workflow Diagrams</p>
      </div>
      <span className="font-label-sm text-label-sm text-secondary shrink-0 group-hover:hidden">Oct 08</span>
      <button  type="button" data-action-id="edit-16" onClick={actions?.["edit-16"]} className="hidden group-hover:flex text-secondary text-[16px] hover:text-primary shrink-0" aria-label="Edit"><Pencil aria-hidden={true} focusable="false" /></button>
      </div>
      {/* Loading State Placeholder (Visual only, at bottom of list) */}
      <div className="h-[48px] px-md flex items-center justify-center gap-2 text-secondary">
      <LoaderCircle className="animate-spin text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Loading older records...</span>
      </div>
      </div>
      </div>
      {/* Detail Pane (Selected Item Preview / Empty State) */}
      <div className="hidden md:flex flex-1 bg-surface-container-lowest overflow-y-auto flex-col relative z-0">
      {/* Empty State (Uncomment to view empty state behavior, currently displaying actual content to show dense UI) */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-surface-container-lowest z-50">
                          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center mb-6">
                              <FileText  style={{fontVariationSettings: "'FILL' 0"}} className="text-[48px] text-surface-variant" aria-hidden={true} focusable="false" />
                          </div>
                          <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">No Record Selected</h3>
                          <p className="font-body-md text-body-md text-secondary max-w-sm mb-8">Select a record from the list to view its details, edit content, or view history.</p>
                          <button className="bg-primary text-on-primary py-[8px] px-[16px] rounded font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-transform flex items-center gap-2" type="button" data-action-id="create-new-record-17" onClick={actions?.["create-new-record-17"]}>
                              <Plus className="text-[18px]" aria-hidden={true} focusable="false" /> Create New Record
                          </button>
                      </div> */}
      {/* Selected Item Preview Content */}
      <div className="p-lg xl:p-xl max-w-4xl mx-auto w-full">
      {/* Detail Meta / Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="px-2 py-1 bg-[#F1F5F9] rounded text-secondary font-label-sm text-label-sm">Strategy</span>
      <span className="px-2 py-1 bg-[#F1F5F9] rounded text-secondary font-label-sm text-label-sm">Finance</span>
      <span className="px-2 py-1 bg-[#F1F5F9] rounded text-secondary font-label-sm text-label-sm">Q3</span>
      <div className="ml-auto flex items-center gap-4">
      <span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
      <History className="text-[14px]" aria-hidden={true} focusable="false" /> Last edited by User • 10:42 AM
                                  </span>
      <div className="flex gap-1 border-l border-outline-variant pl-4">
      <button  title="Share" type="button" data-action-id="share-18" onClick={actions?.["share-18"]} className="text-secondary hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-container-low"><BadgeHelp aria-hidden={true} focusable="false" /></button>
      <button  title="More Options" type="button" data-action-id="more-options-19" onClick={actions?.["more-options-19"]} className="text-secondary hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-container-low"><EllipsisVertical aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      {/* Editable Title */}
      <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-8 outline-none border-b border-transparent focus:border-primary/30 transition-colors pb-1" contentEditable="true" data-placeholder="Untitled Record">Q3 Financial Projections &amp; Strategy</h1>
      {/* Document Body (Simulated minimal editor surface) */}
      <div className="font-body-md text-body-md text-on-surface-variant space-y-5 outline-none" contentEditable="true">
      <p className="leading-relaxed">This document outlines the core strategic initiatives for the upcoming quarter, focusing heavily on margin improvement and operational efficiency across the new product lines introduced in Q1.</p>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-8 mb-3">Key Objectives</h3>
      <ul className="list-disc pl-5 space-y-2 marker:text-secondary">
      <li>Reduce cloud infrastructure costs by 15% through reserved instances and automated scaling policies.</li>
      <li>Launch the new "Enterprise Tier" pricing model by mid-August.</li>
      <li>Achieve a 99.99% uptime SLA for premium customers to prevent churn.</li>
      </ul>
      <p className="leading-relaxed mt-6">The attached data models (see inline references) indicate a strong probability of meeting these targets if Q2 hiring goals for the DevOps team are met by end of month.</p>
      {/* Inline Data Table (Utilitarian layout) */}
      <div className="mt-8 border border-outline-variant rounded bg-surface overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container border-b border-outline-variant">
      <tr>
      <th className="py-2 px-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Initiative</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold w-48">Owner</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold w-40">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
      <td className="py-3 px-4 font-body-sm text-body-sm text-on-surface">Infrastructure Audit &amp; Resource Tagging</td>
      <td className="py-3 px-4 font-body-sm text-body-sm text-secondary">DevOps Team</td>
      <td className="py-3 px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span> In Progress
                                                  </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-bright transition-colors">
      <td className="py-3 px-4 font-body-sm text-body-sm text-on-surface">Enterprise Tier Go-To-Market Plan</td>
      <td className="py-3 px-4 font-body-sm text-body-sm text-secondary">Product Management</td>
      <td className="py-3 px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface">
      <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span> Planning
                                                  </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Activity Event Log Context (Small at bottom) */}
      <div className="mt-12 pt-6 border-t border-surface-variant">
      <h4 className="font-label-md text-label-md text-on-surface font-bold mb-3">Recent Activity</h4>
      <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
      <Pencil className="text-[14px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">User updated the objectives list.</p>
      <p className="font-label-sm text-label-sm text-secondary">Today at 10:42 AM</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
