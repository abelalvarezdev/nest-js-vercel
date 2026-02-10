import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cell', schema: 'evangelism' })
export class Cell {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ name: 'meeting_schedule', nullable: true })
  meetingSchedule: string;

  //   @OneToOne(() => User, { nullable: true })
  //   @JoinColumn({ name: 'teacher_id' })
  //   teacher: User;

  //   @OneToOne(() => User, { nullable: true })
  //   @JoinColumn({ name: 'secretary_id' })
  //   secretary: User;

  //   get teacherName(): string | null {
  //     return this.teacher ? this.teacher.fullName : null;
  //   }
}
