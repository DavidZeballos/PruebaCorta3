import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';
import { FormBuilder,  } from '@angular/forms';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-form.component.html',
  styles: [],
})
export class MemberFormComponent implements OnInit {
  members: Member[] = [];
  memberForm;

  constructor(
    private memberService: MemberService,
    private formBuilder: FormBuilder,
  ) {
    this.memberForm = this.formBuilder.group({
      name: '',
      email: '',
      semester: '',
      career: '',
    });
  }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }

  onSubmit(data: any) {
    this.memberService.createMember(data);
    this.memberForm.reset();
    console.warn('Se ha creado un nuevo integrante', data);
  }
}
