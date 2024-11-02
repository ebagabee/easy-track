import { Component, computed, input, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // Using Signals

  // public readonly avatar = input<string>();
  // public readonly name = input<string>();
  // public readonly imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    // TODO
  }
}
