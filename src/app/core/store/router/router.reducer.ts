import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';

import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
}

export class NavigationSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot) {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;

        return { url, queryParams };
    }
}
