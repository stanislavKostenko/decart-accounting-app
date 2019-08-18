import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {selectRouterState} from '../../../route-selectors';
import {WorksInterface} from '@interfaces/work';
import {selectWorks} from '@store/selectors/categories.selectors';
import {CreateCategoryWork, LoadWorksByCategory} from '@store/actions/categories.actions';
import {worksColumns} from '@mocks/table.mocks';
import {PageType} from '@enums/pages';
import {DialogType} from '@enums/dialog';
import {DialogService} from '@shared/services/dialog.service';
import {DialogComponent} from '@shared/components/form-dialog/dialog.component';
import {emptyWork} from '@mocks/form.mocks';

@Component({
  selector: 'app-category-details-page',
  templateUrl: './category-details-page.component.html',
  styleUrls: ['./category-details-page.component.scss']
})
export class CategoryDetailsPageComponent implements OnInit {
  private categoryId: string;

  public columns: string[] = worksColumns;
  public pageTypes = PageType;
  public dialogTypes = DialogType;
  public emptyWork = emptyWork;

  public works$: Observable<WorksInterface[]>;

  constructor(private store: Store<any>,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.getRouteParams();
    this.getWorks();
  }

  getRouteParams() {
    this.store.pipe(select(selectRouterState)).subscribe((router) => this.categoryId = router.params.id);
  }

  getWorks() {
    this.fetchWorks(this.categoryId);
    this.works$ = this.store.pipe(select(selectWorks));
  }

  fetchWorks(categoryId: string) {
    this.store.dispatch(new LoadWorksByCategory(categoryId));
  }

  handleActions(action: { type: string, item: WorksInterface }) {
    const {type, item} = action;
    this.onInitDialog(type, item);
  }

  onInitDialog(dialogType: string, object?: WorksInterface) {
    const dialogRef = this.dialogService.openDialog(DialogComponent, {
      object,
      dialogType,
      pageType: this.pageTypes.WORK
    });
    this.handleDialogData(dialogRef);
  }

  handleDialogData(dialogRef: any) {
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.resultCase(result);
    });
  }

  resultCase(result: { formValue: WorksInterface, dialogType: string }) {
    switch (result.dialogType) {
      case this.dialogTypes.CREATE:
        return this.createWork(this.categoryId, result.formValue);
      case this.dialogTypes.UPDATE:
        return;
      case this.dialogTypes.DELETE:
        return;
    }
  }

  createWork(categoryId: string, work: WorksInterface) {
    this.store.dispatch(new CreateCategoryWork({categoryId, work}));
  }

}
