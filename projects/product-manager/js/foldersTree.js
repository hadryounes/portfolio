'use strict';

(function ($) {

    var treeData = [
        {title: 'All Products', key: 'all-products', folder: true, children: [
            {title: '1.1', key: '1.1', folder: true, children: [
              {title: '1.1.1', key: '1.1.1'},
              {title: '1.1.2', key: '1.1.2'}
            ]},
    
            {title: '1.2', key: '1.2', folder: true, children: [
              {title: '1.2.1', key: '1.2.1'},
              {title: '1.2.2', key: '1.2.2'}
            ]},
    
            {title: '1.3', key: '1.3', folder: true, children: [
              {title: '1.3.1', key: '1.3.1', folder: true, children: [
                {title: '1.3.1.1', key: '1.3.1.1'},
                {title: '1.3.1.2', key: '1.3.1.2'}
              ]},
              {title: '1.3.2', key: '1.3.2'}
            ]},
    
            {title: '1.4', key: '1.4', folder: true, children: [
              {title: '1.4.1', key: '1.4.1'},
              {title: '1.4.2', key: '1.4.2'}
            ]}
        ]}
    ];

    $('#tree').fancytree( {
        source: treeData,
        beforeActivate : function(event, data) {
            var node = data.node;
            var current = node.tree.getActiveNode();
            if (current) {
                if (current.key == node.key) return;

                var oldParents = current.getParentList();
                _.each(oldParents, function(parent) {
                    parent.extraClasses = '';
                    parent.renderTitle();
                });
            }

            var parents = node.getParentList();
            _.each(parents, function(parent) {
                parent.extraClasses = 'fancytree-active-parent';
                parent.renderTitle();
            });
        }
    } );

    var tree = $("#tree").fancytree("getTree");

    var treeNode = tree.getNodeByKey('1.3.1');
    treeNode.setExpanded(true).done(function() {
        var selectedNode = tree.getNodeByKey('1.3.1.1');
        selectedNode.setActive(true);
    });

})(jQuery);