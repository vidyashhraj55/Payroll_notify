import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { ServiceService } from '../service/service.service';

const uri = 'http://localhost:4000/users/upload';
@Component({
  selector: 'app-upload-employee',
  templateUrl: './upload-employee.component.html',
  styleUrls: ['./upload-employee.component.css']
})
export class UploadEmployeeComponent implements OnInit {
  file: any;


  // uploader:FileUploader = new FileUploader({url:uri});
  // attachmentList: any=[];
  

  // @HostBinding('style.background') private background = '#eee';
  // @HostListener('dragover', ['$event']) public onDragOver(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.background = '#999';
  // }
  // @HostListener('dragleave', ['$event']) public onDragLeave(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.background = '#eee'
  // }
  // @HostListener('drop', ['$event']) public onDrop(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   let files = evt.dataTransfer.files;
  //   if(files.length > 0){
  //     this.background = '#eee'
  //   }
  // }
 
  constructor(private service:ServiceService) { 
    // this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
    //   this.attachmentList.push(JSON.parse(response));
  
  }

  ngOnInit() {
  }
  onFileChanged(event) {
    this.file = event.target.files[0];
    console.log(this.file);
    }

upload(file){
  this.service.uploadFile(file).subscribe((res:any)=>{
    console.log(res);
  })
}
}
