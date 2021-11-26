# 安装 PaddleOCR 服务
## # 运行环境准备(Docker)
### 1.Python 环境搭建
```bash
# 切换到工作目录下
cd /home/Projects
# 首次运行需创建一个docker容器，再次运行时不需要运行当前命令
# 创建一个名字为ppocr的docker容器，并将当前目录映射到容器的/paddle目录下

#如果您希望在CPU环境下使用docker，使用docker而不是nvidia-docker创建docker
sudo docker run --name ppocr -v $PWD:/paddle --network=host -it registry.baidubce.com/paddlepaddle/paddle:2.2.0 /bin/bash

#如果使用CUDA10，请运行以下命令创建容器，设置docker容器共享内存shm-size为64G，建议设置32G以上
# 如果是CUDA11+CUDNN8，推荐使用镜像registry.baidubce.com/paddlepaddle/paddle:2.1.3-gpu-cuda11.2-cudnn8
sudo nvidia-docker run --name ppocr -v $PWD:/paddle --shm-size=64G --network=host -it registry.baidubce.com/paddlepaddle/paddle:2.2.0-gpu-cuda10.2-cudnn7 /bin/bash

# ctrl+P+Q可退出docker 容器，重新进入docker 容器使用如下命令
sudo docker container exec -it ppocr /bin/bash
```
### 2.安装 PaddlePaddle
- 如果您的机器安装的是CUDA9或CUDA10，请运行以下命令安装
```bash
python3 -m pip install paddlepaddle-gpu -i https://mirror.baidu.com/pypi/simple
```
- 如果您的机器是CPU，请运行以下命令安装
```bash
python3 -m pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
```
## # PaddleOCR快速开始
### 1.安装 PaddleOCR whl 包
```bash
pip3 install "paddleocr>=2.0.1" # 推荐使用2.0.1+版本
```
### 2.便捷使用
#### 2.1.1 中英文模型
- 检测+方向分类器+识别全流程：--use_angle_cls true设置使用方向分类器识别180度旋转文字，--use_gpu false设置不使用GPU
```bash
paddleocr --image_dir ./imgs/11.jpg --use_angle_cls true --use_gpu false
```
- 单独使用检测：设置--rec为false
```bash
paddleocr --image_dir ./imgs/11.jpg --rec false
```
- 单独使用识别：设置--det为false
```bash
paddleocr --image_dir ./imgs_words/ch/word_1.jpg --det false
```
## # PPOCR 服务化部署
## 基于 PaddleServing 的服务部署
### 环境准备


