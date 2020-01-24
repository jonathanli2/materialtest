import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: 'mydialog.component.html',
    styleUrls: ['mydialog.component.css']
})

export class MyDialogComponent implements OnInit {
    diaTitle: string;
    diaInput: string;

    constructor(private dialogRef: MatDialogRef<MyDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
            this.diaTitle = data.title;
        }

    ngOnInit(): void {
        console.log('dialog opened')
    }

    close() {
        this.dialogRef.close(this.diaInput);
    }
}
