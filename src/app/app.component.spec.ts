import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FilterPipe } from './pipes/filter.pipe';

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [AppComponent, FilterPipe]
      }).compileComponents();
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
});