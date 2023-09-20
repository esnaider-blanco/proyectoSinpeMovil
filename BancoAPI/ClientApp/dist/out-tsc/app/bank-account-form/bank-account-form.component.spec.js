import { TestBed } from '@angular/core/testing';
import { BankAccountFormComponent } from './bank-account-form.component';
describe('BankAccountFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BankAccountFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(BankAccountFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bank-account-form.component.spec.js.map