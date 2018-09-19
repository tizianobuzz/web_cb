<?php
// src/AppBundle/Controller/LuckyController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class LuckyController extends Controller
{
    /**
     * @Route("/lucky/number", name="luck")
     */
    public function numberAction()
    {
        $number = mt_rand(0, 100);
        return $this->render('default/lucky number.html.twig', array(
            'number' => $number,
        ));
    }
}
