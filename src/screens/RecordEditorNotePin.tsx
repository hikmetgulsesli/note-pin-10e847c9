// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CalendarDays, ChevronDown, CircleAlert, CircleHelp, FolderOpen, ListTodo, Pencil, Plus, Save, Settings } from "lucide-react";


export type RecordEditorNotePinActionId = "cancel-1" | "create-2" | "records-3" | "editor-4" | "insights-5" | "new-note-6" | "cancel-7" | "save-record-8" | "save-9" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordEditorNotePinProps {
  actions?: Partial<Record<RecordEditorNotePinActionId, () => void>>;

}

export function RecordEditorNotePin({ actions }: RecordEditorNotePinProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only Pivot) */}
      <nav className="md:hidden flex flex-col bg-surface w-full max-w-full border-b border-outline-variant z-20">
      <div className="flex justify-between items-center w-full px-margin-mobile h-14">
      <div className="font-headline-md text-headline-md font-bold text-primary">Note Pin</div>
      <div className="flex items-center gap-sm">
      <button className="font-label-md text-label-md text-secondary px-md py-sm rounded hover:bg-surface-container-low transition-colors active:opacity-80 cursor-pointer" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>Cancel</button>
      <button className="font-label-md text-label-md bg-primary text-on-primary px-md py-sm rounded hover:bg-on-primary-fixed-variant transition-colors active:opacity-80 cursor-pointer flex items-center gap-xs" type="button" data-action-id="create-2" onClick={actions?.["create-2"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Create
                      </button>
      </div>
      </div>
      <div className="flex px-margin-mobile gap-lg no-scrollbar pt-sm overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <button className="font-label-md text-label-md text-secondary hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80 pb-2 whitespace-nowrap" type="button" data-action-id="records-3" onClick={actions?.["records-3"]}>Records</button>
      <button className="font-label-md text-label-md text-primary border-b-2 border-primary pb-2 hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80 whitespace-nowrap" type="button" data-action-id="editor-4" onClick={actions?.["editor-4"]}>Editor</button>
      <button className="font-label-md text-label-md text-secondary hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80 pb-2 whitespace-nowrap" type="button" data-action-id="insights-5" onClick={actions?.["insights-5"]}>Insights</button>
      </div>
      </nav>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex flex-col h-full w-[320px] bg-surface-container-lowest border-r border-outline-variant py-lg px-md z-10 shrink-0">
      {/* Header */}
      <div className="flex items-center gap-sm mb-xl px-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-label-sm shrink-0">
                      NP
                  </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">Note Pin</h1>
      <p className="font-label-sm text-label-sm text-secondary">Minimalist Utility</p>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg py-sm px-md mb-xl hover:bg-on-primary-fixed-variant transition-colors shadow-sm" type="button" data-action-id="new-note-6" onClick={actions?.["new-note-6"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Note
              </button>
      {/* Main Navigation */}
      <div className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-md px-sm py-sm font-label-md text-label-md text-secondary hover:bg-surface-container-high rounded-lg transition-colors active:scale-[0.98] cursor-pointer group" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <ListTodo className="text-[20px] group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="group-hover:text-on-surface">Records</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm font-label-md text-label-md bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-colors active:scale-[0.98] cursor-pointer" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[20px] icon-fill" aria-hidden={true} focusable="false" />
      <span>Editor</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm font-label-md text-label-md text-secondary hover:bg-surface-container-high rounded-lg transition-colors active:scale-[0.98] cursor-pointer group" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[20px] group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="group-hover:text-on-surface">Insights</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-xs pt-md border-t border-surface-variant mt-auto">
      <a className="flex items-center gap-md px-sm py-sm font-label-md text-label-md text-secondary hover:bg-surface-container-high rounded-lg transition-colors active:scale-[0.98] cursor-pointer group" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px] group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="group-hover:text-on-surface">Settings</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm font-label-md text-label-md text-secondary hover:bg-surface-container-high rounded-lg transition-colors active:scale-[0.98] cursor-pointer group" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[20px] group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="group-hover:text-on-surface">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Canvas: Record Editor */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background relative">
      {/* Editor Header / Toolbar (Desktop) */}
      <header className="hidden md:flex justify-between items-center px-margin-desktop py-md border-b border-surface-variant bg-surface shrink-0 h-16">
      <div className="flex items-center gap-sm">
      {/* Status Indicator */}
      <div className="flex items-center gap-2 px-sm py-xs bg-surface-container-low rounded-full">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
      <span className="font-label-sm text-label-sm text-secondary">Unsaved changes</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="font-label-md text-label-md text-secondary bg-surface border border-outline-variant px-lg py-sm rounded hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1" type="button" data-action-id="cancel-7" onClick={actions?.["cancel-7"]}>
                          Cancel
                      </button>
      <button className="font-label-md text-label-md text-on-primary bg-primary px-lg py-sm rounded hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1" type="button" data-action-id="save-record-8" onClick={actions?.["save-record-8"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Record
                      </button>
      </div>
      </header>
      {/* Editor Content Area */}
      <div className="flex-1 overflow-y-auto w-full flex flex-col items-center px-margin-mobile md:px-margin-desktop py-xl">
      <div className="w-full max-w-3xl flex flex-col h-full gap-lg">
      {/* Title Input Group (with Validation Error State) */}
      <div className="flex flex-col gap-xs group">
      <input className="w-full bg-transparent border-b-2 border-error focus:border-error focus:outline-none focus:ring-0 font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface placeholder:text-outline-variant pb-xs transition-colors" placeholder="Note Title" type="text" defaultValue="" />
      <div className="flex items-center gap-xs text-error mt-1">
      <CircleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Title is required to save this record.</span>
      </div>
      </div>
      {/* Meta Details (Optional/Contextual) */}
      <div className="flex items-center gap-lg border-b border-surface-variant pb-md">
      <div className="flex items-center gap-xs text-secondary">
      <CalendarDays className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Created today</span>
      </div>
      <div className="flex items-center gap-xs text-secondary">
      <FolderOpen className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">No Category</span>
      <ChevronDown className="text-[16px] cursor-pointer hover:text-primary transition-colors ml-xs" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Content Textarea */}
      <div className="flex-1 w-full relative group">
      <textarea className="w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 resize-none font-body-md text-body-md text-on-surface placeholder:text-outline-variant py-md leading-relaxed" placeholder="Start typing your note here...">Project kick-off notes:
      - Need to finalize the design system tokens.
      - Review the color contrast ratios for light mode.
      - Schedule follow up with engineering regarding the structural layout of the main dashboard.
      
      The overarching goal is utilitarian minimalism. Keep the UI out of the way. Let the content breathe.</textarea>
      {/* Floating Action Button (Mobile Contextual Save - visible only when scrolling or keyboard active on mobile) */}
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:bg-on-primary-fixed-variant transition-transform active:scale-95 z-30" type="button" aria-label="Save" data-action-id="save-9" onClick={actions?.["save-9"]}>
      <Save className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
