export const extensionRoutes = [  {
    path: 'extensions/webhook',
    loadChildren: () => import('./extensions/8572e71bafb952943e667ed7828cfe732c95105483847b9193bd89b4da9c034c/webhook.module').then(m => m.WebhookModule),
  }];
