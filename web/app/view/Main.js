
Ext.define('SenchaDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'SenchaDemo.view.InsertForm'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Insert',
                iconCls: 'add',
                xtype: 'insertform'
                // styleHtmlContent: true,
                // scrollable: true,
            }

        ]
    }
});
