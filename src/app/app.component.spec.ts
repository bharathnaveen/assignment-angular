import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FilterPipe } from './pipes/filter.pipe';

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let filter: FilterPipe;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [AppComponent, FilterPipe]
      }).compileComponents();

      filter = new FilterPipe();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("file change event should arrive in handler", () => {
    let input = fixture.debugElement.query(By.css("input[type=file]")).nativeElement;
    spyOn(component, "uploadFile");
    input.dispatchEvent(new Event("change"));
    expect(component.uploadFile).toHaveBeenCalled();
  });

  it("filter pipe should be instanciated", () => {
    expect(FilterPipe).toBeDefined();
  });

  it("filter pipe should return items if no field is given", () => {
    let items = [];
    items.push({ id: 1, ['Issue count']: '5' });

    let filtered = filter.transform(items, null, "Issue count");
    expect(filtered).toEqual(items);
  });

  it("filter pipe should filter", () => {
    let items = [];

    items.push({ ['Issue count']: '5' });
    items.push({ ['Issue count']: '7' });
    items.push({ ['Issue count']: '7' });
    items.push({ ['Issue count']: '5' });

    let filtered = filter.transform(items, '7', "Issue count");

    expect(filtered.length).toBe(2);
  });
});