import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';
import { FormBuilder,  } from '@angular/forms';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-edit.component.html',
  styles: [],
})
export class MemberEditComponent implements OnInit {
  members: Member[] = [];
  memberEdit;

  constructor(
    private memberService: MemberService,
    private formBuilder: FormBuilder,
  ) {
    this.memberEdit = this.formBuilder.group({
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
    //this.memberService.editMember();
    this.memberEdit.reset();
    console.warn('Se ha modificado integrante', data);
  }
}
