Search.setIndex({docnames:["concepts","contrib/engines","contrib/handlers","contrib/metrics","engine","examples","exceptions","faq","handlers","index","metrics","quickstart","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["concepts.rst","contrib/engines.rst","contrib/handlers.rst","contrib/metrics.rst","engine.rst","examples.rst","exceptions.rst","faq.rst","handlers.rst","index.rst","metrics.rst","quickstart.rst","utils.rst"],objects:{"":{ignite:[9,0,0,"-"]},"ignite.contrib":{engines:[1,0,0,"-"],metrics:[3,0,0,"-"]},"ignite.contrib.engines":{Tbptt_Events:[1,1,1,""],create_supervised_tbptt_trainer:[1,3,1,""]},"ignite.contrib.engines.Tbptt_Events":{TIME_ITERATION_COMPLETED:[1,2,1,""],TIME_ITERATION_STARTED:[1,2,1,""]},"ignite.contrib.handlers":{custom_events:[2,0,0,"-"],param_scheduler:[2,0,0,"-"],polyaxon_logger:[2,0,0,"-"],tensorboard_logger:[2,0,0,"-"],tqdm_logger:[2,0,0,"-"],visdom_logger:[2,0,0,"-"]},"ignite.contrib.handlers.custom_events":{CustomPeriodicEvent:[2,1,1,""]},"ignite.contrib.handlers.param_scheduler":{ConcatScheduler:[2,1,1,""],CosineAnnealingScheduler:[2,1,1,""],CyclicalScheduler:[2,1,1,""],LRScheduler:[2,1,1,""],LinearCyclicalScheduler:[2,1,1,""],ParamGroupScheduler:[2,1,1,""],ParamScheduler:[2,1,1,""],PiecewiseLinear:[2,1,1,""],create_lr_scheduler_with_warmup:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.ConcatScheduler":{get_param:[2,4,1,""],simulate_values:[2,5,1,""]},"ignite.contrib.handlers.param_scheduler.CosineAnnealingScheduler":{get_param:[2,4,1,""]},"ignite.contrib.handlers.param_scheduler.LRScheduler":{get_param:[2,4,1,""],simulate_values:[2,5,1,""]},"ignite.contrib.handlers.param_scheduler.LinearCyclicalScheduler":{get_param:[2,4,1,""]},"ignite.contrib.handlers.param_scheduler.ParamScheduler":{get_param:[2,4,1,""],simulate_values:[2,5,1,""]},"ignite.contrib.handlers.param_scheduler.PiecewiseLinear":{get_param:[2,4,1,""]},"ignite.contrib.handlers.polyaxon_logger":{OutputHandler:[2,1,1,""],PolyaxonLogger:[2,1,1,""]},"ignite.contrib.handlers.polyaxon_logger.PolyaxonLogger":{attach:[2,4,1,""]},"ignite.contrib.handlers.tensorboard_logger":{GradsHistHandler:[2,1,1,""],GradsScalarHandler:[2,1,1,""],OptimizerParamsHandler:[2,1,1,""],OutputHandler:[2,1,1,""],TensorboardLogger:[2,1,1,""],WeightsHistHandler:[2,1,1,""],WeightsScalarHandler:[2,1,1,""]},"ignite.contrib.handlers.tensorboard_logger.TensorboardLogger":{attach:[2,4,1,""]},"ignite.contrib.handlers.tqdm_logger":{ProgressBar:[2,1,1,""]},"ignite.contrib.handlers.tqdm_logger.ProgressBar":{attach:[2,4,1,""],log_message:[2,6,1,""]},"ignite.contrib.handlers.visdom_logger":{GradsScalarHandler:[2,1,1,""],OptimizerParamsHandler:[2,1,1,""],OutputHandler:[2,1,1,""],VisdomLogger:[2,1,1,""],WeightsScalarHandler:[2,1,1,""]},"ignite.contrib.handlers.visdom_logger.GradsScalarHandler":{add_scalar:[2,4,1,""]},"ignite.contrib.handlers.visdom_logger.OptimizerParamsHandler":{add_scalar:[2,4,1,""]},"ignite.contrib.handlers.visdom_logger.OutputHandler":{add_scalar:[2,4,1,""]},"ignite.contrib.handlers.visdom_logger.VisdomLogger":{attach:[2,4,1,""]},"ignite.contrib.handlers.visdom_logger.WeightsScalarHandler":{add_scalar:[2,4,1,""]},"ignite.contrib.metrics":{AveragePrecision:[3,1,1,""],ROC_AUC:[3,1,1,""]},"ignite.contrib.metrics.regression":{CanberraMetric:[3,1,1,""],FractionalAbsoluteError:[3,1,1,""],FractionalBias:[3,1,1,""],GeometricMeanAbsoluteError:[3,1,1,""],GeometricMeanRelativeAbsoluteError:[3,1,1,""],ManhattanDistance:[3,1,1,""],MaximumAbsoluteError:[3,1,1,""],MeanAbsoluteRelativeError:[3,1,1,""],MeanError:[3,1,1,""],MeanNormalizedBias:[3,1,1,""],MedianAbsoluteError:[3,1,1,""],MedianAbsolutePercentageError:[3,1,1,""],MedianRelativeAbsoluteError:[3,1,1,""],R2Score:[3,1,1,""],WaveHedgesDistance:[3,1,1,""]},"ignite.engine":{Engine:[4,1,1,""],Events:[4,1,1,""],State:[4,1,1,""],create_supervised_evaluator:[4,3,1,""],create_supervised_trainer:[4,3,1,""]},"ignite.engine.Engine":{add_event_handler:[4,4,1,""],fire_event:[4,4,1,""],has_event_handler:[4,4,1,""],on:[4,4,1,""],register_events:[4,4,1,""],remove_event_handler:[4,4,1,""],run:[4,4,1,""],terminate:[4,4,1,""],terminate_epoch:[4,4,1,""]},"ignite.engine.Events":{COMPLETED:[4,2,1,""],EPOCH_COMPLETED:[4,2,1,""],EPOCH_STARTED:[4,2,1,""],EXCEPTION_RAISED:[4,2,1,""],ITERATION_COMPLETED:[4,2,1,""],ITERATION_STARTED:[4,2,1,""],STARTED:[4,2,1,""]},"ignite.exceptions":{NotComputableError:[6,1,1,""]},"ignite.handlers":{EarlyStopping:[8,1,1,""],ModelCheckpoint:[8,1,1,""],TerminateOnNan:[8,1,1,""],Timer:[8,1,1,""]},"ignite.handlers.Timer":{attach:[8,4,1,""],running:[8,2,1,""],step_count:[8,2,1,""],total:[8,2,1,""]},"ignite.metrics":{Accuracy:[10,1,1,""],ConfusionMatrix:[10,1,1,""],EpochMetric:[10,1,1,""],IoU:[10,3,1,""],Loss:[10,1,1,""],MeanAbsoluteError:[10,1,1,""],MeanPairwiseDistance:[10,1,1,""],MeanSquaredError:[10,1,1,""],Metric:[10,1,1,""],MetricsLambda:[10,1,1,""],Precision:[10,1,1,""],Recall:[10,1,1,""],RootMeanSquaredError:[10,1,1,""],RunningAverage:[10,1,1,""],TopKCategoricalAccuracy:[10,1,1,""],mIoU:[10,3,1,""]},"ignite.metrics.Metric":{compute:[10,4,1,""],reset:[10,4,1,""],update:[10,4,1,""]},"ignite.utils":{apply_to_tensor:[12,3,1,""],apply_to_type:[12,3,1,""],convert_tensor:[12,3,1,""],to_onehot:[12,3,1,""]},ignite:{engine:[4,0,0,"-"],utils:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","classmethod","Python class method"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:classmethod","6":"py:staticmethod"},terms:{"10th":2,"20th":2,"21st":2,"30th":2,"34e":2,"abstract":[0,2,11],"boolean":10,"break":11,"case":[1,4,7,10,11],"class":[0,1,2,3,4,6,7,8,10],"default":[1,2,4,10],"enum":[4,7],"final":[8,11],"float":[2,8,10],"function":[0,1,2,3,4,7,8,10,11,12],"import":[2,4,7,8,11],"int":[1,2,4,8,10],"long":[1,10],"new":10,"return":[0,1,2,3,4,7,8,10,11],"static":2,"true":[1,2,4,8,10],"while":[0,1],And:11,For:[0,1,2,4,7,8,10,11],The:[0,2,4,8,10,11],Then:2,There:[5,7],These:8,Using:8,__class__:2,__name__:2,__version__:2,_complet:2,_infer:11,_lrschedul:2,_metrics_transform:11,_output_transform:11,_prepare_batch:[1,4,11],_start:2,_updat:11,a_j:3,abov:[0,10,11],abs:8,absolut:[2,3,8,10],acc:0,acc_metr:10,accept:11,accord:10,accumul:[3,9,10,11],accumulation_step:7,accuraci:[0,2,10,11],achiev:2,across:10,activ:3,activated_output_transform:3,actual:10,add:[0,4,7,11],add_event_handl:[0,2,4,7,8,11],add_scalar:2,added:[2,4,11],adding:[2,9,11],addit:[1,4,9,11],adit:1,adjust:2,advanc:2,aforement:8,after:[0,2,4,8,10,11],aggreg:11,all:[0,2,3,4,10],allow:[4,7,11],alpha:10,alreadi:2,also:[0,2,10,11],among:[4,7],ani:[0,2,4,8,10,12],anneal:2,anoth:[0,2,7,11],another_engin:2,another_loss:2,answer:7,appendix:3,appli:[1,2,3,4,10,12],applic:2,apply_to_tensor:12,apply_to_typ:12,area:3,arg:[0,4,10,11],argument:[0,1,2,4,8,10,11],arithmet:10,arrai:2,articl:7,ask:7,assign:4,associ:4,assum:10,asynchron:[1,4],atom:8,attach:[0,2,4,8,10,11],attribut:4,auc:3,auto:5,automat:[2,4,10],avail:[3,10],averag:[3,8,10],average_precision_scor:3,averageprecis:3,avg:[10,11],avg_output:10,avg_precis:3,avoid:2,axi:[1,2],back:[2,7],background:10,backprop:1,backpropag:1,backpropev:7,backward:[0,4,9,11],backward_complet:7,backward_start:7,bar:[2,3],bar_ev:4,bar_format:2,base:[2,3,9,10],batch:[0,1,2,4,7,8,10,11],batch_i:[1,4],batch_pr:4,batch_siz:[2,10],batch_x:[1,4],batchsiz:7,been:[2,4],befor:[1,3,4,10],being:4,below:[0,3,8,9,10],best:7,best_model_sav:7,beta:10,between:[1,2,4,8],bia:3,binari:10,binary_accuraci:10,blog:7,boilerpl:9,bool:[1,2,4,8,10],botchkarev:3,both:[1,4],bound:[2,4],breez:9,bug:2,calcul:[3,7,10],call:[0,2,4,8,10],callabl:[1,2,3,4,8,10],callback:8,can:[0,2,3,4,7,8,9,10,11],canberra:3,canberrametr:3,cannot:[6,10],care:10,categor:10,cdot:3,chang:[2,4],characterist:3,check:[4,8],checkpoint:9,chunk:1,classif:5,classmethod:2,client:2,clone:9,close:2,closing_event_nam:2,code:[0,5,7,9],coeffici:3,collect:[4,8],com:2,combin:10,combined_schedul:2,common:[2,11],compact:[5,9],comparison:9,complet:[0,2,3,4,7,8,11],complex:9,compon:11,compris:3,comput:[0,1,2,3,6,7,10,11],computation:1,compute_fn:10,concat:2,concept:9,concis:9,concurr:2,conda:9,confer:2,confid:3,configur:[2,4],confus:10,confusionmatrix:10,consequ:7,consid:[0,8],constructor:[8,11],contain:[0,8,10],context:2,contrib:9,contribut:[1,2,3],control:8,convert:12,convert_tensor:12,convolut:5,copi:[1,4],core:4,correct:[2,7],correspond:[2,10],cosin:2,cosineannealinglr:2,could:[7,10,11],count:10,counter:8,cours:2,cpe1:2,cpe2:2,cpu:[1,4],creat:[0,1,2,4,8,9,11],create_dir:8,create_engin:11,create_lr_scheduler_with_warmup:2,create_supervised_evalu:[4,11],create_supervised_tbptt_train:[0,1],create_supervised_train:[2,4,11],criterion:7,cuda:2,current:[0,2,3,4,10],curv:3,custom:[0,2,4,9],custom_ev:[4,9],customperiodicev:[2,7],cycl:2,cycle_mult:2,cycle_s:2,cyclic:2,cyclicalschedul:2,damag:8,data:[0,2,3,4,10,11],data_load:4,dataload:[4,11],dataset:[0,2,4,7,8,11],datatyp:10,dcgan:5,decai:10,decor:[0,4,11],decreas:2,dedic:1,def:[0,2,3,4,7,8,10,11],defin:[0,2,4,7,10,11],defind:4,definit:3,depend:10,desc:2,descript:2,destin:8,detail:[0,2,3,7,8,11],determin:3,devic:[1,2,4,7,11,12],diagon:10,dict:[2,4,8],dictionari:[0,2,10],differ:0,dim:1,dimens:[1,10],directli:2,directori:[2,8],dirnam:8,disk:8,displai:[0,2,5],distanc:[3,10],divid:8,doc:[2,10],doe:10,doesnt:8,done:[0,2,10,11],door:4,down:2,due:2,durat:2,dure:[2,3,4,8,11],dynam:4,each:[0,2,4,8,9,10],earli:[7,9],earlystop:[7,8],easi:11,easili:11,effect:[1,4,7],either:[2,3],elaps:[2,7,8],element:10,els:10,emit:4,empti:2,encod:5,encourag:11,end:[0,2,10,11],end_valu:2,end_value_mult:2,engin:[2,3,8,9,10,11],entir:10,entri:2,environ:2,epoch:[0,2,3,4,8,9,10,11],epoch_bound:10,epoch_complet:[0,2,4,7,8,11],epoch_start:[0,4,8],epochmetr:10,epochs_10:2,epochs_10_start:2,epochs_:2,eps:10,equal:8,equival:[7,11],error:[3,10],essenc:0,essenti:11,estim:3,eta_min:2,etc:[0,7],eval:11,evalu:[0,2,4,7,8,11],even:[4,11],event:[1,2,4,8,9,10,11],event_index:2,event_nam:[2,4],everi:[0,1,2,8,11],exactli:8,exampl:[0,3,4,7,8,9,10,11],except:[8,9],exception_rais:4,exchang:4,execut:[0,2,4,8,11],exist:8,exp:3,expect:[3,4,8,10],expens:11,experi:2,explan:9,exponentiallr:2,extra:10,facebookresearch:2,facilit:0,factor:10,factori:4,fae:3,fals:[1,2,4,8,10,12],faq:9,fashion:10,fast:5,fbeta:10,featur:[5,9],fed:10,few:[5,9],figsiz:2,figur:2,file:[8,11],filenam:8,filename_prefix:8,fill:2,fire:[0,2,4,11],fire_ev:[0,4,7],first:[0,2,4,10,11],fit:4,flag:[2,8,10],flexibl:[0,7],float32:[3,10],follow:[0,2,7,8,10,11],foo_ev:4,footnot:11,forget:8,form:[2,3,10],format:[0,2,4,10,11],forward:9,found:[0,3,4,7,11],frac:3,fraction:3,fractionalabsoluteerror:3,fractionalbia:3,framework:0,frequent:[2,7],from:[0,2,4,5,8,9,10,11],full:[5,9],func:12,function_before_backprop:7,further:8,furthermor:9,futur:2,gamma:2,gener:2,geometr:3,geometricmeanabsoluteerror:3,geometricmeanrelativeabsoluteerror:3,get:[0,1,2,9,10,11],get_data_load:11,get_device_nam:2,get_param:2,git:2,github:[2,7,9],give:11,given:[0,2,4,8],global:2,global_step:2,gmae:3,gmrae:3,goe:[2,4],good:0,gpu:[1,4,7],gradient:[1,2,9],grads_scalar_handl:2,gradshisthandl:2,gradsscalarhandl:2,ground:[3,10],group:[2,7],guarante:[2,8],guid:11,half:2,handl:4,handler:[4,7,9,11],happen:0,has:[0,1,4,8,9,10],has_event_handl:4,have:[2,3,4,7,8,10,11],hedg:3,help:[0,5,9],helper:[2,11,12],here:[4,7,8],high:9,higher:8,highest:8,histogram:2,histori:10,hold:10,host:[1,4],hot:12,how:[0,5],howev:[1,10,11],http:2,ideal:4,idl:8,ieee:2,ignit:[0,5,7,11],ignor:10,ignore_index:10,imag:10,impact:2,implement:[3,7,10,11],improv:[0,8],in_training_loop_on_epoch_complet:7,includ:0,increas:[2,7,9],increment:8,indefinit:2,independ:2,index:[2,10],indic:[8,10,12],infer:4,infinit:8,inform:[0,11],initi:[0,10],initializ:0,input:[0,3,4,10],input_:12,input_typ:12,insert:7,insid:2,instal:2,instanc:10,instead:[2,10],integ:2,intend:0,intens:1,interact:0,interest:[10,11],intern:[2,4,8],intersect:10,introduc:0,invok:4,iou:10,iou_metr:10,iou_no_bg_metr:10,ipywidget:2,is_multilabel:10,issu:7,item:[0,4,7,10,11],iter:[0,2,4,9,11],iteration_:2,iteration_complet:[0,2,4,8,10,11],iteration_start:[0,2,4,8],iterations_1000:2,iterations_1000_complet:2,iterations_:2,its:[0,8,9,10],jump:2,jupyt:2,just:[7,11],kei:[2,8],kept:8,keyword:[4,10],known:1,kwarg:[0,2,4,10,11],kwd:2,l_bar:2,label:[2,7],lambda:[0,2,3,4,8,10],larg:11,larger:[2,3,10],last:[1,2,11],latter:10,launch:7,lead:[3,10],learn:[2,5],least:8,left:3,legend:2,len:[2,11],length:[1,2],lesli:2,less:2,let:[0,2,4,11],level:9,librari:9,like:[0,2,9,10,11],limit:7,line:[5,9,11],linear:8,linearli:2,list:[0,2,3,4],listdir:8,log:[2,7,11],log_dir:2,log_handl:2,log_messag:2,log_param:2,log_running_avg_metr:10,log_training_loss:11,log_training_result:11,log_validation_result:11,logger:2,logic:11,logit:10,look:[2,11],loop:[0,4,5,7,9,11],loss1:2,loss2:2,loss:[0,1,2,4,7,8,10,11],loss_fn:[0,1,4,7,10,11],lr_schedul:2,lr_scheduler_1:2,lr_scheduler_2:2,lr_scheduler_3:2,lr_valu:2,lr_values_1:2,lr_values_2:2,lr_values_3:2,lr_values_4:2,lvert:3,mai:[1,2,4],main:[2,11],make:4,manag:2,manhattan:3,manhattandist:3,mani:1,map:[4,8,12],mare:3,mathemat:3,matplotlib:2,matrix:10,max:[3,4],max_:3,max_epoch:[0,4,8,11],maxa:3,maximum:3,maximumabsoluteerror:3,mdae:3,mdape:3,mdrae:3,mean:[3,10],mean_iou_no_bg_metr:10,meanabsoluteerror:10,meanabsoluterelativeerror:3,meanerror:3,meannormalizedbia:3,meanpairwisedist:10,meansquarederror:10,measur:[8,11],median:3,medianabsoluteerror:3,medianabsolutepercentageerror:3,medianrelativeabsoluteerror:3,memori:[3,10],messag:[0,2],method:[0,2,4,8,11,12],metric1:10,metric2:10,metric:[0,2,4,6,7,8,9,11],metric_nam:2,metricslambda:10,middl:2,might:7,mileston:2,milestones_valu:2,miou:10,mnb:3,mnist:[5,11],model:[0,1,2,3,4,7,8,9,10,11],model_resnet_10_val_loss:8,modelcheckpoint:[7,8],modul:[1,2,3,4,12],momentum:[2,11],more:[0,3,4,7,8,9,11],most:[7,11],move:[8,11,12],multi:[3,8,10],multiclass:10,multilabel:10,multipl:[0,2,7,8],must:[3,8,10],mydata:0,mymodel:[7,8],myprefix:8,myprefix_mymodel_4:8,myprefix_mymodel_6:8,n_class:10,n_epoch:2,n_fmt:2,n_iter:2,n_save:8,name:[2,4,8,11],nan:8,need:[0,2,4,7,10],net:11,network:[2,5,9],neural:[2,5,9],new_attribut:0,newli:2,next:[0,2,11],nll:[2,8,11],nllloss:11,no_grad:11,non_block:[1,4,7,12],none:[1,2,3,4,8,10,11,12],norm:2,normal:[3,10],notcomputableerror:[6,10],note:[4,8,9,11],notebook:[2,5],now:[4,11],num_categori:10,num_class:[10,12],num_ev:2,num_work:2,number:[0,2,7,8,10],numpi:2,object:[2,4,8,12],observ:[10,11],obtain:10,occasion:9,occur:[0,1,4,8],older:8,on_every_1000_iter:2,on_every_10_epoch:2,on_iteration_complet:0,on_training_end:0,on_training_start:0,onc:[0,10],one:[1,2,3,7,8,10,11,12],onli:[2,7,8,11],onlin:[10,11],open:4,oper:[2,3,10],opitm:7,opportun:1,optim:[0,1,2,4,7,11],optim_step_complet:7,optimizer_params_handl:2,optimizerparamshandl:2,option:[1,2,3,4,8,10,11],other:[0,1,4,7,9,10],otherwis:[2,8,10],our:11,output:[0,1,2,3,4,8,10,11],output_simulated_valu:2,output_transform:[0,2,3,4,8,10],outputhandl:2,over:[0,1,2,4,7,10,11],own:9,p_j:3,packag:[2,9],page:3,pair:2,pairwis:10,paragraph:0,param:2,param_group:2,param_histori:2,param_nam:2,param_schedul:9,paramet:[0,1,3,4,8,9,10,11],paramgroupschedul:2,paramschedul:2,part:11,pass:[2,4,8,9,10,11],password:2,path:[2,8],patienc:[7,8],pattern:11,paus:8,pbar:2,percentag:[2,3],perform:2,period:[2,8],persist:2,phase:2,piecewiselinear:2,pip:[2,9],plateau:7,pleas:2,plot:2,plt:2,plx_logger:2,point:4,polyaxon:2,polyaxon_logg:9,polyaxonlogg:2,port:[2,5],possibl:[2,8],post:2,postfix:2,potenti:[3,10],pow:10,practic:[0,7,10],precis:[2,3,10],predict:[2,3,10],prefix:8,prepar:2,prepare_batch:[0,1,4,7],preserv:2,previous:11,print:[0,2,4,10,11],print_epoch:4,print_loss:0,probabl:3,process:[0,1,4,8,10],process_batch:7,process_funct:[0,3,4,8,10],produc:2,progress:2,progressbar:2,project:11,propag:7,proper:2,provid:[0,2,3,7,8,10],pth:8,pure:9,purpos:11,pylab:2,python:[2,9],pytorch:[2,5,9,10],quantiti:10,question:7,quickstart:9,r2score:3,r_bar:2,rais:[6,8,10],ram:[3,10],rang:8,rapidli:9,rate:2,rate_fmt:2,ratio:2,readabl:9,recal:10,receiv:[1,3,4,10,11],recommend:2,recurr:1,recurs:10,redefin:11,reduc:[2,7],reduct:2,refer:[3,9],regist:[0,4,8],register_ev:[0,2,4,7],registerd:4,regress:9,reinforc:5,rel:3,relev:12,remain:2,remov:[4,8],remove_event_handl:4,render:2,repeat:[2,4],replac:2,repres:[1,2,10],requir:[1,2,11],require_empti:8,requires_grad:2,reset:[8,10],resourc:7,respect:[1,3,4,10],restrict:[0,10],result:[0,10,11],resum:8,retain:8,review:11,right:3,roc:3,roc_auc:3,roc_auc_scor:3,role:11,roll:9,root:10,rootmeansquarederror:10,round:10,run:[0,2,4,7,8,9,10,11],running_avg_accuraci:10,running_avg_loss:10,runningaverag:[2,10],rvert:3,same:[1,3],sampl:10,save:[0,8],save_as_state_dict:8,save_histori:2,save_interv:8,scalar:[2,10],schedul:9,scheduler1:2,scheduler2:2,scheduler_1:2,scheduler_2:2,scheduler_kwarg:2,schema:10,score:8,score_funct:[7,8],score_function_result:8,score_nam:8,search:4,second:[8,11],section:[2,7],see:[0,2,8,9],seed:2,seen:10,select:2,self:[4,8],send:[2,4],sequenc:[1,10,12],serial:8,server:2,set:[2,4,11],setup:[2,9],sever:[5,7,11],sgd:[2,11],shape:[3,10,12],shortcut:4,should:[2,4,8,10],show:[2,9],show_legend:2,shown:[3,10],side:9,sigmoid:3,signal:4,signatur:10,similar:0,similarli:0,simpl:[0,2,7],simpli:[0,2,11],simul:2,simulate_valu:2,sinc:0,singl:[0,2,7,8],situat:2,size:[2,10],sklearn:3,sleep:8,slow:2,smaller:1,smith17:2,smith:2,snippet:11,softmax:3,some:[0,2,7],someth:[7,10],sourc:[0,1,2,3,4,6,8,9,10,11,12],specif:[1,4],specifi:[2,4,8],squar:[3,10],src:10,start:[0,2,4,7,8,9,10,11],start_valu:2,start_value_mult:2,state:[2,4,7,8,9,10,11],state_dict:8,stdout:2,step:[0,1,2,4,7,8,11],step_count:8,step_numb:8,step_schedul:2,step_siz:2,steplr:2,still:11,stop:[7,8,9],storag:0,store:[0,3,4,8,10],str:[1,2,4,8,10],string:[2,4],structur:8,style:5,subclass:2,subplot:2,subsequ:1,subset:11,suggest:2,sum_:3,supervis:[0,1,4],support:[4,10],system:0,t_max:2,tag:2,take:[2,8,10,11],taken:2,target:[3,4,10],task:[0,3],tb_log:2,tb_logger:2,tbptt:[1,7],tbptt_event:1,tbtt_step:1,temporari:8,tensor:[1,2,3,4,8,10,12],tensorboard:2,tensorboard_logg:9,tensorboardlogg:2,tensorboardx:2,termin:4,terminate_epoch:4,terminateonnan:8,text:[3,5],than:[2,3,10],thei:4,them:[0,7,8],therefor:[7,11],thi:[0,1,2,3,4,7,8,10,11],thing:[9,11],thread:2,threadpoolexecutor:2,threshold:10,thresholded_output_transform:10,through:[1,2,10,11],throught:1,thu:[0,2,11],time:[0,1,7,8],time_iteration_complet:1,time_iteration_start:1,timer:8,titl:2,tmp:[7,8],to_onehot:12,togeth:10,too:7,top:10,topkcategoricalaccuraci:10,torch:[1,3,4,8,10,11],torch_lr_schedul:2,total:8,total_fmt:2,tqdm:2,tqdm_kwarg:2,tqdm_logger:9,tqdm_notebook:2,track:2,train:[0,1,2,4,5,7,8,9,11],train_and_store_loss:4,train_batch_s:11,train_dataset:10,train_evalu:[2,10],train_load:[2,11],train_loss:0,trainer:[0,1,2,4,7,8,10,11],training_update_funct:8,transform:[0,2,3,8,10],trigger:2,truncat:1,truth:[3,10],tupl:[1,2,4,10],two:[8,10,11],type:[0,1,2,3,4,7,8,10],typic:[0,2],unaverag:10,under:3,understand:7,union:10,until:2,unweight:10,updat:[0,1,2,3,4,7,10,11],update_fn:[2,7],update_funct:11,update_model:0,url:2,usag:[0,4],use:[0,1,2,3,4,7,10],used:[0,2,3,4,8,10],useful:[3,8,10],user:[0,2,4,7,8,10,11],user_handler_funct:0,usernam:2,uses:2,using:[0,2,5,7,8,9,10,11],usual:[2,10],util:[9,11],val_batch_s:11,val_load:[7,11],val_loss:8,valid:[0,2,4,7,8,9,11],valu:[2,3,4,8,10],value_0:2,value_1:2,variabl:[2,10],variat:5,variou:[2,10,11],vb_logger:2,vd_logger:2,vector:10,version:2,visdom:2,visdom_logg:9,visdom_password:2,visdom_port:2,visdom_server_url:2,visdom_usernam:2,visdomlogg:2,vision:2,visual:2,wacv:2,wai:[7,10],wait:8,want:[0,2,3,7,8,10,11],warm:2,warmup_dur:2,warmup_end_valu:2,warmup_start_valu:2,wave:[2,3],wavehedgesdist:3,weight:2,weights_scalar_handl:2,weightshisthandl:2,weightsscalarhandl:2,welcom:11,well:11,what:[0,2],whatev:2,whd:3,when:[0,1,2,4,7,8,9,10,11],when_validation_loop_is_don:7,where:[2,3,7,8,10,11],whether:[2,10],which:[0,2,4,7,8,10],whole:[1,8],window:2,winter:2,wish:2,without:[9,10,11],work:[2,8],worker:2,would:[0,10,11],wrap:2,wrapper:2,write:[5,9],xlabel:2,y_pred:[0,3,4,7,10,11],y_true:10,ylabel:2,ylim:2,you:[2,3,4,8,9,10,11],your:[9,11],zero:2,zero_grad:[0,4,7,11]},titles:["Concepts","ignite.contrib.engines","ignite.contrib.handlers","ignite.contrib.metrics","ignite.engine","Examples","ignite.exceptions","FAQ","ignite.handlers","Ignite Documentation","ignite.metrics","Quickstart","ignite.utils"],titleterms:{accumul:7,backward:7,base:7,code:11,concaten:2,concatschedul:2,concept:0,contrib:[1,2,3],cosineannealingschedul:2,creat:7,custom:7,custom_ev:2,document:9,each:7,engin:[0,1,4,7],epoch:7,event:[0,7],exampl:[2,5],except:6,explan:11,faq:7,forward:7,gradient:7,handler:[0,2,8],has:7,ignit:[1,2,3,4,6,8,9,10,12],instal:9,iter:7,its:7,linear:2,linearcyclicalschedul:2,lrschedul:2,metric:[3,10],more:2,own:7,param_schedul:2,paramet:2,pass:7,piecewis:2,polyaxon_logg:2,quickstart:11,regress:3,schedul:2,state:0,tensorboard_logg:2,timelin:0,torch:2,tqdm_logger:2,util:12,visdom_logg:2}})