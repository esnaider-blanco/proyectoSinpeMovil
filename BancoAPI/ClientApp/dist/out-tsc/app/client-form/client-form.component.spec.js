import { TestBed } from '@angular/core/testing';
import { ClientFormComponent } from './client-form.component';
describe('ClientFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClientFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ClientFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-form.component.spec.js.map