import { TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
describe('LoginFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=login-form.component.spec.js.map