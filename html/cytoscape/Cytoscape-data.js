var oldNodes = [
  {
    data: {
        id: 'a',
      name: 'a'
    }
  },
  {
    data: {
      id: "o",
      name: 'o',
    }
  },
  {
    data: {
        id: 'kevkevkevkev',
      name: 'kevkevkevkev',
      parent: 'o',
      isTitle: true,
    }
  },          
  {
    data: {
        id: 'b',
      name: 'bbbbbb',
      parent: 'o'
    }
  },
  {
    data: {
        id: 'c',
      name: 'c',
      parent: 'o'
    }
  },
  {
    data: {
        id: 'd',
      name: 'd',
      parent: 'o'
    }
  },
  {
    data: {
        id: 'f',
      name: 'f'
    }
  },
  {
    data: {
      id: 'k',
      name: 'k',
    }
  },
  {
    data: {
      id: 'kesha',
      name: 'kesha',
      parent: 'k',
      isTitle: true,
    }
  },
  {
    data: {
        id: 'i',
      name: 'i',
      parent: 'k'
    }
  },
  {
    data: {
        id: 'j',
      name: 'j',
      parent: 'k'
    }
  },
  ];

var oldEdges = [
  {
        'data': {
          source: 'a',
          target: 'b'
        }
      },
      {
        'data': {
          source: 'a',
          target: 'c'
        }
      },   
        {
        'data': {
          source: 'a',
          target: 'd'
        }
      }, 
        {
        'data': {
          source: 'b',
          target: 'f'
        }
      }, 
        {
        'data': {
          source: 'a',
          target: 'i'
        }
      },   
      {
        'data': {
          source: 'a',
          target: 'j'
        }
      },
    ]
  
  
  // healthy-status: error warn normal healthy
  var dataNodes = [
    // IT 服务平台
    {
      data: {
        id: 'itServicePlatForm',
        name: 'IT服务平台'
      },
    },
    // IT服务平台 - 签名服务
    {
      data: { 
        id: 'signService',
        name: '签名服务'
      }
    },
    // IT服务平台 - 签名服务 - 物理机/虚拟机
    {
       data: {
        id: 'machineWrapper',
        name: '虚拟机/物理机-wrapper'
       }
    },
    // IT服务平台 - 签名服务 - 物理机/虚拟机 - 容器
    {
      data: {
        id: 'machine',
        name: '虚拟机/物理机',
        isTitle: true,
        parent: 'machineWrapper'
      }
    },
    {
      data: {
        id: 'itwoke-log-01',
        name: 'itwoke-log-01',
        parent: 'machineWrapper'
      }
    },
    {
      data: {
        id: 'itwoke-log-02',
        name: 'itwoke-log-02',
        parent: 'machineWrapper'
      }
    },
    {
      data: {
        id: 'k8s-iuhjlk-01',
        name: 'k8s-iuhjlk-01',
        parent: 'machineWrapper'
      }
    },
    {
      data: {
        id: 'k8s-iuhjlk-02',
        name: 'k8s-iuhjlk-02',
        parent: 'machineWrapper'
      }
    },
    // IT服务平台 - 签名服务 - 物理机/虚拟机 - 容器 - IP
    {
      data: {
        id: 'IP: 192.168.1.5',
        name: 'IP: 192.168.1.5',
      }
      // parent: 'machineWrapper'
    },
    {
      data: {
        id: 'IP: 192.168.3.8',
        name: 'IP: 192.168.3.8',
      }
      // parent: 'machineWrapper'
    },
    {
      data: {
        id: 'IP: 28.23.3.1',
        name: 'IP: 28.23.3.1',
      }
      // parent: 'machineWrapper'
    },



    // IT服务平台 - 签名服务 - K8S集群
    {
      data: {
        id: 'signK8SWrapper',
        name: 'K8S集群-wrapper'
      }
    },
    {
      data: {
        id: 'signK8S',
        name: 'K8S集群',
        isTitle: true,
        parent: 'signK8SWrapper'
      }
    },        
    // IT服务平台 - 签名服务 - K8S集群  - 容器    
    {
      data: {
        id: 'signk8s1',
        name: 'TKE-DEV',
        parent: 'signK8SWrapper',
      }
    },
    {
      data: {
        id: 'signk8s2',
        name: 'TKE-TEST',
        parent: 'signK8SWrapper',
      }
    },
    {
      data: {
        id: 'signk8s3',
        name: 'TKE-PROD',
        parent: 'signK8SWrapper',
      }
    },
    // IT服务平台 - 签名服务 - K8S集群 - 容器  - IP
    {
      data: {
        id: 'signk8s1m',
        name: 'dev',
      }
    },
    {
      data: {
        id: 'signk8s2m',
        name: 'test',
      }
    },
    {
      data: {
        id: 'signk8s3m',
        name: 'prod',
      }
    },        

    // IT服务平台 - 签名服务 - ElasticSearch
    {
      data: {
        id: 'signESWrpper',
        name: 'ElasticSearchWrapper',
      }
    },
    {
      data: {
        id: 'signES',
        name: 'ElasticSearch',
        isTitle: true,
        parent: 'signESWrpper'
      }
    },
    {
      data: {
        id: 'signESpod1',
        name: '集群一',
        parent: 'signESWrpper'
      }
    },
    {
      data: {
        id: 'signESpod2',
        name: '集群二',
        parent: 'signESWrpper'
      }
    },

    // IT服务平台 - 签名服务 - MYSQL
    {
      data: {
        id: 'signMYSQLWrpper',
        name: 'MYSQLWrapper',
      }
    },
    {
      data: {
        id: 'signMYSQL',
        name: 'MYSQL',
        isTitle: true,
        parent: 'signMYSQLWrpper',
      }
    },
    {
      data: {
        id: 'signMYSQLpod1',
        name: 'cluster-1',
        parent: 'signMYSQLWrpper',
      }
    },
    {
      data: {
        id: 'signMYSQLpod2',
        name: 'cluster-2',
        parent: 'signMYSQLWrpper',
      }
    },

    
    // IT服务平台 - 短信服务
    {
      data: {
        id: 'signSMSService',
        name: '短信服务',
        isTitle: true,
      }
    },
    // IT服务平台 - 短信服务 - ElasticSearch
    {
      data: {
        id: 'signSMSESWrpper',
        name: 'SMSElasticSearchWrapper',
      }
    },
    {
      data: {
        id: 'signSMSES',
        name: 'ElasticSearch',
        isTitle: true,
        parent: 'signSMSESWrpper',
      }
    },
    {
      data: {
        id: 'signSMSESpod1',
        name: '集群一',
        parent: 'signSMSESWrpper',
      }
    },
    {
      data: {
        id: 'signSMSESpod2',
        name: '集群二',
        parent: 'signSMSESWrpper',
      }
    },

    // IT服务平台 - 短信服务 - MYSQL
    {
      data: {
        id: 'signSMSMYSQLWrpper',
        name: 'MYSQLWrapper',
      }
    },
    {
      data: {
        id: 'signSMSMYSQL',
        name: 'MYSQL',
        isTitle: true,
        parent: 'signSMSMYSQLWrpper',
      }
    },
    {
      data: {
        id: 'signSMSMYSQLpod1',
        name: 'cluster-1',
        parent: 'signSMSMYSQLWrpper',
      }
    },
    {
      data: {
        id: 'signSMSMYSQLpod2',
        name: 'cluster-2',
        parent: 'signSMSMYSQLWrpper',
      }
    },        

    // IT服务平台 - 网关服务
    {
      data: {
        id: 'signNetworkService',
        name: '网关服务',
        isTitle: true,
      }
    },

    // IT服务平台 - 网关服务 - K8S集群
    {
      data: {
        id: 'signNETK8SWrapper',
        name: 'signNETK8SWrapper'
      }
    },
    {
      data: {
        id: 'signNETK8S',
        name: 'k8s集群',
        isTitle: true,
        parent: 'signNETK8SWrapper',
      }
    },    
    {
      data: {
        id: 'signNETk8sPod1',
        name: 'TKE-DEV',
        parent: 'signNETK8SWrapper',
      }
    },
    {
      data: {
        id: 'signNETk8sPod2',
        name: 'TKE-TEST',
        parent: 'signNETK8SWrapper',
      }
    },
    {
      data: {
        id: 'signNETk8sPod3',
        name: 'TKE-PROD',
        parent: 'signNETK8SWrapper',
      }
    },                   

    // IT服务平台 - 网关服务 - ElasticSearch
    {
      data: {
        id: 'signNETESWrpper',
        name: 'NETElasticSearchWrapper',
      }
    },
    {
      data: {
        id: 'signNETES',
        name: 'ElasticSearch',
        isTitle: true,
        parent: 'signNETESWrpper'
      }
    },
    {
      data: {
        id: 'signNETESpod1',
        name: '集群一',
        parent: 'signNETESWrpper'
      }
    },
    {
      data: {
        id: 'signNETESpod2',
        name: '集群二',
        parent: 'signNETESWrpper'
      }
    },

    // IT服务平台 - 网关服务 - MYSQL
    {
      data: {
        id: 'signNETMYSQLWrpper',
        name: 'MYSQLWrapper',
      }
    },
    {
      data: {
        id: 'signNETMYSQL',
        name: 'MYSQL',
        isTitle: true,
      }
    },
    {
      data: {
        id: 'signNETMYSQLpod1',
        name: 'cluster-1'
      }
    },
    {
      data: {
        id: 'signNETMYSQLpod2',
        name: 'cluster-2'
      }
    },  
    
 ]


 var dataEdges =[
    {
      data: {
        source: 'itServicePlatForm',
        target: 'signService',
        healthyStatus: 'error'
      }
    },
    // 签名服务-物理机/虚拟机
    {
      data: {
        source: 'signService',
        target: 'itwoke-log-01',
        healthyStatus: 'normal'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'itwoke-log-02',
        healthyStatus: 'normal'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'k8s-iuhjlk-01',
        healthyStatus: 'normal'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'k8s-iuhjlk-02',
        healthyStatus: 'normal'
      }
    },
    // // 签名服务-物理机/虚拟机 - IP
    {
      data: {
        source: 'itwoke-log-02',
        target: 'IP: 192.168.3.8',
        healthyStatus: 'normal'
      }
    },  
    {
      data: {
        source: 'k8s-iuhjlk-01',
        target: 'IP: 28.23.3.1',
        healthyStatus: 'normal'
      }
    },
    {
      data: {
        source: 'k8s-iuhjlk-02',
        target: 'IP: 28.23.3.1',
        healthyStatus: 'normal'
      }
    },

    // 签名服务 - k8s集群
    
    {
      data: {
        source: 'signService',
        target: 'signk8s1',
        healthyStatus: 'error'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'signk8s2',
        healthyStatus: 'error'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'signk8s3',
        healthyStatus: 'error'
      }
    },

    // 签名服务 - k8s集群 - pod
    {
      data: {
        source: 'signk8s1',
        target: 'signk8s1m',
        healthyStatus: 'error'
      }
    },
    {
      data: {
        source: 'signk8s1',
        target: 'signk8s2m',
        healthyStatus: 'error'
      }
    },
    {
      data: {
        source: 'signk8s1',
        target: 'signk8s3m',
        healthyStatus: 'error'
      }
    },


    // 签名服务 - ElasticSearch
    {
      data: {
        source: 'signService',
        target: 'signESpod1',
        healthyStatus: 'healthy'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'signESpod1',
        healthyStatus: 'healthy'
      }
    },  
    
    
    // 签名服务 -  mysql
    {
      data: {
        source: 'signService',
        target: 'signMYSQLpod1',
        healthyStatus: 'normal'
      }
    },
    {
      data: {
        source: 'signService',
        target: 'signMYSQLpod2',
        healthyStatus: 'normal'
      }
    },



    // 短信服务
    {
      data: {
        source: 'itServicePlatForm',
        target: 'signSMSService',
        healthyStatus: 'warn'
      }
    },
    // 短信服务 - Elastic Search
    {
      data: {
        source: 'signSMSService',
        target: 'signSMSESpod1',
        healthyStatus: 'warn'
      }
    },
    {
      data: {
        source: 'signSMSService',
        target: 'signSMSESpod2',
        healthyStatus: 'warn'
      }
    },     
    // 短信服务 - MYSQL
    {
      data: {
        source: 'signSMSService',
        target: 'signSMSMYSQLpod1',
        healthyStatus: 'warn'
      }
    },
    {
      data: {
        source: 'signSMSService',
        target: 'signSMSMYSQLpod2',
        healthyStatus: 'warn'
      }
    },
    
    
    // 网关服务
    {
      data: {
        source: 'itServicePlatForm',
        target: 'signNetworkService',
        healthyStatus: 'healthy'
      }
    },

    // 网关服务 - k8s集群 
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETk8sPod1',
        healthyStatus: 'healthy'
      }
    }, 
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETk8sPod2',
        healthyStatus: 'healthy'
      }
    }, 
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETk8sPod3',
        healthyStatus: 'healthy'
      }
    },
    
    // 网关服务 - ElasticSearch
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETESpod1',
        healthyStatus: 'healthy'
      }
    },
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETESpod2',
        healthyStatus: 'healthy'
      }
    },        
    // 网关服务 - MYSQL
    {
      data: {
        source: 'signNetworkService',
        target: 'signNETMYSQLpod1',
        healthyStatus: 'healthy'
      }
    },
    {
      data: {
        source: 'signNETMYSQLpod2',
        target: 'signNETESpod2',
        healthyStatus: 'healthy'
      }
    },  
 ]


//  window.oldNodes = oldNodes
//  window.oldEdges = oldEdges

export default {
  oldNodes,
  oldEdges,
  dataNodes,
  dataEdges
}




var cy = (window.cy = cytoscape({
  container: document.getElementById("cy"),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: [
    {
      selector: "node",
      css: {
        content: "data(id)",
        "text-valign": "bottom",
        "text-halign": "center",
        height: "60px",
        width: "60px",
        "border-color": "black",
        "border-opacity": "1",
        "background-image":
          "https://farm8.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg"
      }
    },
    {
      selector: "edge",
      css: {
        "target-arrow-shape": "triangle"
      }
    },
    {
      selector: ":selected",
      css: {
        "background-color": "black",
        "line-color": "black",
        "target-arrow-color": "black",
        "source-arrow-color": "black"
      }
    }
  ],

  elements: {
    nodes: [
      { data: { id: "n0" } },
      { data: { id: "n1" } },
      { data: { id: "n2" } },
      { data: { id: "n3" } },
      { data: { id: "n4" } },
      { data: { id: "n5" } },
      { data: { id: "n6" } },
      { data: { id: "n7" } },
      { data: { id: "n8" } },
      { data: { id: "n9" } },
      { data: { id: "n10" } },
      { data: { id: "n11" } },
      { data: { id: "n12" } },
      { data: { id: "n13" } },
      { data: { id: "n14" } },
      { data: { id: "n15" } },
      { data: { id: "n16" } }
    ],
    edges: [
      { data: { source: "n0", target: "n1" } },
      { data: { source: "n1", target: "n2" } },
      { data: { source: "n1", target: "n3" } },
      { data: { source: "n2", target: "n7" } },
      { data: { source: "n2", target: "n11" } },
      { data: { source: "n2", target: "n16" } },
      { data: { source: "n3", target: "n4" } },
      { data: { source: "n3", target: "n16" } },
      { data: { source: "n4", target: "n5" } },
      { data: { source: "n4", target: "n6" } },
      { data: { source: "n6", target: "n8" } },
      { data: { source: "n8", target: "n9" } },
      { data: { source: "n8", target: "n10" } },
      { data: { source: "n11", target: "n12" } },
      { data: { source: "n12", target: "n13" } },
      { data: { source: "n13", target: "n14" } },
      { data: { source: "n13", target: "n15" } }
    ]
  },

  layout: {
    name: "dagre",
    padding: 5
  }
}));

cy.unbind("click");
cy.bind("click", "node", function (event) {                // just for demonstration  purposes here
  var coll = cy.$(event.target).successors();             // get all outgoing nodes
  coll = coll.add(event.target);                          // add their source
  var removed = cy.remove(cy.elements().not(coll));       // remove all other elements
  var len = cy.nodes().length;
  var pad = (len < 10 ? (len < 5 ? (len < 3 ? (len < 2 ? 150 : 100) : 75) : 50) : 25);                                           // custom padding function here
  cy.animate({
    fit: {
      eles: cy.elements(),
      padding: pad
    }
  }, {
      duration: 500,
      easing: 'ease-in'
    });
});