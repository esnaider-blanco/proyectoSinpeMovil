import { TestBed } from '@angular/core/testing';
import { SinpeFormComponent } from './sinpe-form.component';
describe('SinpeFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SinpeFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SinpeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sinpe-form.component.spec.js.map