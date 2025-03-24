import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunoListComponent } from './components/entidade/aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/entidade/aluno/aluno-form/aluno-form.component';
import { TurmaListComponent } from './components/entidade/turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './components/entidade/turma/turma-form/turma-form.component';
import { ProfessorListComponent } from './components/entidade/professor/professor-list/professor-list.component';
import { ProfessorFormComponent } from './components/entidade/professor/professor-form/professor-form.component';
import { CursoListComponent } from './components/entidade/curso/curso-list/curso-list.component';
import { CursoFormComponent } from './components/entidade/curso/curso-form/curso-form.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "aluno", component: AlunoListComponent},
        {path: "aluno/new", component: AlunoFormComponent},
        {path: "aluno/edit/:id", component: AlunoFormComponent},
    
        { path: "professor", component: ProfessorListComponent },
        { path: "professor/new", component: ProfessorFormComponent },
        { path: "professor/edit/:id", component: ProfessorFormComponent },
    
        { path: "curso", component: CursoListComponent },
        { path: "curso/new", component: CursoFormComponent },
        { path: "curso/edit/:id", component: CursoFormComponent },
    
        { path: "turma", component: TurmaListComponent },
        { path: "turma/new", component: TurmaFormComponent },
        { path: "turma/edit/:id", component: TurmaFormComponent }


    ]
    }

];