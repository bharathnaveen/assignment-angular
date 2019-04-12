import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("file change event should arrive in handler", () => {
    let input = fixture.debugElement.query(By.css("input[type=file]"))
      .nativeElement;
    spyOn(component, "uploadFile");
    input.dispatchEvent(new Event("change"));
    expect(component.uploadFile).toHaveBeenCalled();
  });
});
