import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public ele: ElectronService) { }

  ngOnInit() {
  }

  popup() {
    this.ele.remote.dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
  }

  relauch() {
    this.ele.remote.app.relaunch();
    this.ele.remote.app.exit();
  }

  addRecent() {
    try {
      this.ele.remote.app.addRecentDocument('/Users/wangbolin/Desktop/wbl.txt');
    } catch (error) {
      console.log(error);

    }
  }

  clearLatest() {
    this.ele.remote.app.clearRecentDocuments();

  }

  showOS() {
    // tslint:disable-next-line:max-line-length
    this.ele.remote.dialog.showMessageBox({ type: 'info', title: this.ele.os.hostname(), message: `${this.ele.os.type()} + ${this.ele.os.arch()}` });
  }
}
