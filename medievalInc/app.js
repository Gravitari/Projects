// in object, how to intergrate html elements by id to properties
// and addeventlisteners to object methods.

function resource(res){
    const hResBtn = document.getElementById(res+"-btn")
    const hResUpgrade= document.getElementById(res+"upgrade-btn")
    const hResWorker = document.getElementById(res+"worker-btn")
    const hResInfo = document.getElementById(res+"info-text")
    let jResCount=0
    let jResUpgrade=0
    let jResWorkers = 0

    function ResRender(){
        hResInfo.textContent = `${res}: ${jResCount} || Workers: ${jResWorkers} || Upgrade-output: ${jResUpgrade}`
    }

    hResBtn.addEventListener("click",function(){
        jResCount=jResCount+1+jResUpgrade + jResWorkers
        ResRender()
    })

    hResUpgrade.addEventListener("click",function(){
        jResUpgrade++
    ResRender()
    })

    hResWorker.addEventListener("click", function(){
    jResWorkers++
    ResRender()
    })
}

resource("wood")




  
/*     basicWorkBtn: addEventListener("click",function(){
      this.jResCount = this.jResCount + 1 + this.jResUpgrade + this.jResWorkers
      this.resInfo.textContent = `Resource: ${this.jResCount} || Workers:  
      ${this.jResWorkers} || Upgrade-output: ${this.jResUpgrade}`
    }) */





/* 
// in object, how to intergrate html elements by id to properties
// and addeventlisteners to object methods.
function Resource(){
    this.jResCount = 0
    this.jResWorkers = 0
    this.jResUpgrade = 0
    this.hResInfo = document.getElementById("woodinfo-text")
    this.ResRender = function(){
        this.hResInfo.textContent = `Wood: ${this.jResCount} || Workers: ${this.jResWorkers} || Upgrade-output: ${this.jResUpgrade}`
    }
    this.hResBtn = document.getElementById("woodupgrade-btn").addEventListener("click",function(){
        this.jResCount=this.jResCount+1+this.jResUpgrade + this.jResWorkers
        this.ResRender()
      })
    this.hResWorker = document.getElementById("woodworker-btn").addEventListener("click", function(){
        this.jResWorkers+=1
        this.ResRender()
      })
    this.hResUpgrade = document.getElementById("woodupgrade-btn").addEventListener("click",function(){
        this.jResUpgrade+=1
        this.ResRender()
      })


    
}

const wood = new Resource()

*/


/* 1. -- VANILLA --
const hResBtn = document.getElementById("wood-btn")
const hResUpgrade= document.getElementById("woodupgrade-btn")
const hResWorker = document.getElementById("woodworker-btn")
const hResInfo = document.getElementById("woodinfo-text")
let jResCount=0
let jResUpgrade=0
let jResWorkers = 0

hResBtn.addEventListener("click",function(){
  jResCount=jResCount+1+jResUpgrade + jResWorkers
  ResRender()
})

hResUpgrade.addEventListener("click",function(){
  jResUpgrade++
  ResRender()
})

hResWorker.addEventListener("click", function(){
  jResWorkers++
  ResRender()
})

function ResRender(){
  hResInfo.textContent = `Wood: ${jResCount} || Workers: ${jResWorkers} || Upgrade-output: ${jResUpgrade}`
}
*/